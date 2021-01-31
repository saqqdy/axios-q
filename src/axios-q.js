const axios = require('axios')
const DEFAULT_MAX_CONNECTIONS = 10

const config = {}

const AxiosQueue = {
	queue: [],
	$axios: null,
	create(options) {
		const _time = Date.now()
		const promiseKey = JSON.stringify(Object.assign({ _time }, options.data || {}))
		const CancelToken = axios.CancelToken
		const source = CancelToken.source()
		options.cancelToken = source.token
		const promise = new Promise((resolve, reject) => {
			const instance = axios.create()

			// 添加一个请求拦截器
			instance.interceptors.request.use(config => {})
			// 添加一个响应拦截器
			instance.interceptors.response.use(res => {})
		})
		this.queue.push(22)
	}
}

module.exports = AxiosQueue
