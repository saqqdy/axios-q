import { AxiosRequestConfig } from 'axios';

declare const AxiosQueue: AxiosQueueType;
export default AxiosQueue;

export declare interface AxiosQueueConfig extends AxiosRequestConfig {
    retry?: any;
    interval?: any;
    maxConnections?: any;
    unique?: any;
    setHeaders?: any;
    onRequest?: any;
    onRequestError?: any;
    onResponse?: any;
    onResponseError?: any;
    onError?: any;
    onCancel?: any;
}

export declare interface AxiosQueueOptions extends AxiosRequestConfig {
    url: string;
}

export declare interface AxiosQueueType {
    queue: {
        [prop: string]: any;
    };
    $axios: any;
    create(options: AxiosQueueOptions, config: AxiosQueueConfig): Promise<any>;
}

export { }
