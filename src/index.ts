import axios, { AxiosRequestConfig, CancelTokenSource } from 'axios'
import getRandomStr from 'js-cool/lib/getRandomStr'
// import type { AnyObject } from '../typings/common'

export interface AxiosQueueType {
    queue: {
        [prop: string]: any
    }
    $axios: any
    create(options: AxiosQueueOptions, config: AxiosQueueConfig): Promise<any>
}

export interface AxiosQueueOptions extends AxiosRequestConfig {
    url: string
}

export interface AxiosQueueConfig extends AxiosRequestConfig {
    retry?: any
    interval?: any
    maxConnections?: any
    unique?: any
    setHeaders?: any
    onRequest?: any
    onRequestError?: any
    onResponse?: any
    onResponseError?: any
    onError?: any
    onCancel?: any
}

function AxiosQueue() {
    return {
        queue: {},
        $axios: null,
        create(options: AxiosQueueOptions = { url: '' }, config: AxiosQueueConfig = {}) {
            const { retry = 0, interval = 2000, maxConnections = 10, unique = false, setHeaders, onRequest, onRequestError, onResponse, onResponseError, onError, onCancel } = { ...config, ...options }
            console.info(retry, interval, maxConnections)
            const promiseKey = getRandomStr(6) + '_' + Date.now()
            const source: CancelTokenSource = axios.CancelToken.source()
            options.cancelToken = source.token
            const promise = new Promise(async (resolve, reject) => {
                const instance = axios.create()
                let processing = []

                // 设置请求头
                setHeaders && setHeaders(instance)

                // 添加一个请求拦截器
                onRequest &&
                    instance.interceptors.request.use(onRequest, (err: any) => {
                        onRequestError && onRequestError(err)
                        onError && onError(err)
                        return Promise.reject(err)
                    })
                // 添加一个响应拦截器
                onResponse &&
                    instance.interceptors.response.use(onResponse, (err: any) => {
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
                if (processing.length > 0) {
                    let len = processing.length
                    while (len > 0) {
                        try {
                            await processing[len]
                        } catch {
                            processing.splice(len, 1)
                        }
                        len--
                    }
                }

                // 执行
                instance(options)
                    .then((res: any) => {
                        // 成功回调
                        resolve(res)
                    })
                    .catch((err: any) => {
                        if (axios.isCancel(err)) {
                            // 请求取消
                            onCancel && onCancel(err)
                        } else {
                            // 失败回调
                            reject(err)
                        }
                    })
                    .finally(() => {
                        let index = this.queue[options.url].findIndex((el: any) => el.promiseKey === promiseKey)
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
    } as AxiosQueueType
}

export default AxiosQueue()
