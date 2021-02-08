const axios = require('axios')
const getRandomStr = require('js-cool/lib/getRandomStr')

const AxiosQueue = {
	queue: {},
	$axios: null,
	create(options = {}, config = {}) {
		const { retry = 0, interval = 2000, maxConnections = 10, unique = false, setHeaders, onRequest, onRequestError, onResponse, onResponseError, onError, onCancel } = { ...config, ...options }
		const promiseKey = getRandomStr(6) + '_' + Date.now()
		const source = axios.CancelToken.source()
		options.cancelToken = source.token
		const promise = new Promise(async (resolve, reject) => {
			const instance = axios.create()
			let processing = []

			// 设置请求头
			setHeaders && setHeaders(instance)

			// 添加一个请求拦截器
			onRequest &&
				instance.interceptors.request.use(onRequest, err => {
					onRequestError && onRequestError(err)
					onError && onError(err)
					return Promise.reject(err)
				})
			// 添加一个响应拦截器
			onResponse &&
				instance.interceptors.response.use(onResponse, err => {
					onResponseError && onResponseError(err)
					onError && onError(err)
					return Promise.reject(err)
				})

			// 需要等待的队列
			for (let request of this.queue[options.url] || []) {
				if (unique) {
					request.source.cancel('request canceled')
				} else {
					processing.push(request.promise)
				}
			}
			if (processing.length > 0) await Promise.all(processing)

			// 执行
			instance(options)
				.then(res => {
					// 成功回调
					resolve(res)
				})
				.catch(err => {
					if (axios.isCancel(err)) {
						// 请求取消
						onCancel && onCancel(err)
					} else {
						// 失败回调
						reject(err)
					}
				})
				.finally(() => {
					let index = this.queue[options.url].findIndex(el => el.promiseKey === promiseKey)
					index > -1 && this.queue[options.url].splice(index, 1)
				})
		})
		if (!this.queue[options.url]) this.queue[options.url] = []
		this.queue[options.url].push({
			promiseKey,
			promise,
			source
		})
		return promise
	}
}

module.exports = AxiosQueue
