import { AxiosInstance } from 'axios';
import { AxiosRequestConfig } from 'axios';
import { AxiosResponse } from 'axios';
import { CancelTokenSource } from 'axios';

export declare interface AxiosQueueConfig {
    retry?: number;
    interval?: number;
    maxConnections?: number;
    unique?: boolean;
    setHeaders?(instance: AxiosInstance): void;
    onRequest?(config: AxiosRequestConfig): AxiosRequestConfig | Promise<AxiosRequestConfig>;
    onRequestError?(error: any): void;
    onResponse?(res: AxiosResponse<any>): AxiosResponse<any> | Promise<AxiosResponse<any>>;
    onResponseError?(error: any): void;
    onError?(error: any): void;
    onCancel?(error: any): void;
}

export declare interface AxiosQueueObject {
    promiseKey: string;
    promise: Promise<any>;
    source: CancelTokenSource;
}

export declare interface AxiosQueueType {
    queue: {
        [prop: string]: Array<AxiosQueueObject>;
    };
    $axios: any;
    create(options: AxiosRequestConfig, config: AxiosQueueConfig): Promise<any>;
}

declare const _default: AxiosQueueType;
export default _default;

export { }
