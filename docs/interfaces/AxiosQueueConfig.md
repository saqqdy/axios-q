[index.md - v1.1.0](../README.md) / [Exports](../modules.md) / AxiosQueueConfig

# Interface: AxiosQueueConfig

## Hierarchy

-   `AxiosRequestConfig`

    ↳ **`AxiosQueueConfig`**

## Table of contents

### Properties

-   [adapter](AxiosQueueConfig.md#adapter)
-   [auth](AxiosQueueConfig.md#auth)
-   [baseURL](AxiosQueueConfig.md#baseurl)
-   [cancelToken](AxiosQueueConfig.md#canceltoken)
-   [data](AxiosQueueConfig.md#data)
-   [decompress](AxiosQueueConfig.md#decompress)
-   [headers](AxiosQueueConfig.md#headers)
-   [httpAgent](AxiosQueueConfig.md#httpagent)
-   [httpsAgent](AxiosQueueConfig.md#httpsagent)
-   [interval](AxiosQueueConfig.md#interval)
-   [maxBodyLength](AxiosQueueConfig.md#maxbodylength)
-   [maxConnections](AxiosQueueConfig.md#maxconnections)
-   [maxContentLength](AxiosQueueConfig.md#maxcontentlength)
-   [maxRedirects](AxiosQueueConfig.md#maxredirects)
-   [method](AxiosQueueConfig.md#method)
-   [onCancel](AxiosQueueConfig.md#oncancel)
-   [onError](AxiosQueueConfig.md#onerror)
-   [onRequest](AxiosQueueConfig.md#onrequest)
-   [onRequestError](AxiosQueueConfig.md#onrequesterror)
-   [onResponse](AxiosQueueConfig.md#onresponse)
-   [onResponseError](AxiosQueueConfig.md#onresponseerror)
-   [params](AxiosQueueConfig.md#params)
-   [proxy](AxiosQueueConfig.md#proxy)
-   [responseType](AxiosQueueConfig.md#responsetype)
-   [retry](AxiosQueueConfig.md#retry)
-   [setHeaders](AxiosQueueConfig.md#setheaders)
-   [socketPath](AxiosQueueConfig.md#socketpath)
-   [timeout](AxiosQueueConfig.md#timeout)
-   [timeoutErrorMessage](AxiosQueueConfig.md#timeouterrormessage)
-   [transformRequest](AxiosQueueConfig.md#transformrequest)
-   [transformResponse](AxiosQueueConfig.md#transformresponse)
-   [unique](AxiosQueueConfig.md#unique)
-   [url](AxiosQueueConfig.md#url)
-   [validateStatus](AxiosQueueConfig.md#validatestatus)
-   [withCredentials](AxiosQueueConfig.md#withcredentials)
-   [xsrfCookieName](AxiosQueueConfig.md#xsrfcookiename)
-   [xsrfHeaderName](AxiosQueueConfig.md#xsrfheadername)

### Methods

-   [onDownloadProgress](AxiosQueueConfig.md#ondownloadprogress)
-   [onUploadProgress](AxiosQueueConfig.md#onuploadprogress)
-   [paramsSerializer](AxiosQueueConfig.md#paramsserializer)

## Properties

### adapter

• `Optional` **adapter**: `AxiosAdapter`

#### Inherited from

AxiosRequestConfig.adapter

#### Defined in

node_modules/axios/index.d.ts:57

---

### auth

• `Optional` **auth**: `AxiosBasicCredentials`

#### Inherited from

AxiosRequestConfig.auth

#### Defined in

node_modules/axios/index.d.ts:58

---

### baseURL

• `Optional` **baseURL**: `string`

#### Inherited from

AxiosRequestConfig.baseURL

#### Defined in

node_modules/axios/index.d.ts:47

---

### cancelToken

• `Optional` **cancelToken**: `CancelToken`

#### Inherited from

AxiosRequestConfig.cancelToken

#### Defined in

node_modules/axios/index.d.ts:72

---

### data

• `Optional` **data**: `any`

#### Inherited from

AxiosRequestConfig.data

#### Defined in

node_modules/axios/index.d.ts:53

---

### decompress

• `Optional` **decompress**: `boolean`

#### Inherited from

AxiosRequestConfig.decompress

#### Defined in

node_modules/axios/index.d.ts:73

---

### headers

• `Optional` **headers**: `any`

#### Inherited from

AxiosRequestConfig.headers

#### Defined in

node_modules/axios/index.d.ts:50

---

### httpAgent

• `Optional` **httpAgent**: `any`

#### Inherited from

AxiosRequestConfig.httpAgent

#### Defined in

node_modules/axios/index.d.ts:69

---

### httpsAgent

• `Optional` **httpsAgent**: `any`

#### Inherited from

AxiosRequestConfig.httpsAgent

#### Defined in

node_modules/axios/index.d.ts:70

---

### interval

• `Optional` **interval**: `any`

#### Defined in

[src/index.ts:18](https://github.com/saqqdy/axios-q/blob/9ddde01/src/index.ts#L18)

---

### maxBodyLength

• `Optional` **maxBodyLength**: `number`

#### Inherited from

AxiosRequestConfig.maxBodyLength

#### Defined in

node_modules/axios/index.d.ts:66

---

### maxConnections

• `Optional` **maxConnections**: `any`

#### Defined in

[src/index.ts:19](https://github.com/saqqdy/axios-q/blob/9ddde01/src/index.ts#L19)

---

### maxContentLength

• `Optional` **maxContentLength**: `number`

#### Inherited from

AxiosRequestConfig.maxContentLength

#### Defined in

node_modules/axios/index.d.ts:64

---

### maxRedirects

• `Optional` **maxRedirects**: `number`

#### Inherited from

AxiosRequestConfig.maxRedirects

#### Defined in

node_modules/axios/index.d.ts:67

---

### method

• `Optional` **method**: `Method`

#### Inherited from

AxiosRequestConfig.method

#### Defined in

node_modules/axios/index.d.ts:46

---

### onCancel

• `Optional` **onCancel**: `any`

#### Defined in

[src/index.ts:27](https://github.com/saqqdy/axios-q/blob/9ddde01/src/index.ts#L27)

---

### onError

• `Optional` **onError**: `any`

#### Defined in

[src/index.ts:26](https://github.com/saqqdy/axios-q/blob/9ddde01/src/index.ts#L26)

---

### onRequest

• `Optional` **onRequest**: `any`

#### Defined in

[src/index.ts:22](https://github.com/saqqdy/axios-q/blob/9ddde01/src/index.ts#L22)

---

### onRequestError

• `Optional` **onRequestError**: `any`

#### Defined in

[src/index.ts:23](https://github.com/saqqdy/axios-q/blob/9ddde01/src/index.ts#L23)

---

### onResponse

• `Optional` **onResponse**: `any`

#### Defined in

[src/index.ts:24](https://github.com/saqqdy/axios-q/blob/9ddde01/src/index.ts#L24)

---

### onResponseError

• `Optional` **onResponseError**: `any`

#### Defined in

[src/index.ts:25](https://github.com/saqqdy/axios-q/blob/9ddde01/src/index.ts#L25)

---

### params

• `Optional` **params**: `any`

#### Inherited from

AxiosRequestConfig.params

#### Defined in

node_modules/axios/index.d.ts:51

---

### proxy

• `Optional` **proxy**: `false` \| `AxiosProxyConfig`

#### Inherited from

AxiosRequestConfig.proxy

#### Defined in

node_modules/axios/index.d.ts:71

---

### responseType

• `Optional` **responseType**: `ResponseType`

#### Inherited from

AxiosRequestConfig.responseType

#### Defined in

node_modules/axios/index.d.ts:59

---

### retry

• `Optional` **retry**: `any`

#### Defined in

[src/index.ts:17](https://github.com/saqqdy/axios-q/blob/9ddde01/src/index.ts#L17)

---

### setHeaders

• `Optional` **setHeaders**: `any`

#### Defined in

[src/index.ts:21](https://github.com/saqqdy/axios-q/blob/9ddde01/src/index.ts#L21)

---

### socketPath

• `Optional` **socketPath**: `null` \| `string`

#### Inherited from

AxiosRequestConfig.socketPath

#### Defined in

node_modules/axios/index.d.ts:68

---

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

AxiosRequestConfig.timeout

#### Defined in

node_modules/axios/index.d.ts:54

---

### timeoutErrorMessage

• `Optional` **timeoutErrorMessage**: `string`

#### Inherited from

AxiosRequestConfig.timeoutErrorMessage

#### Defined in

node_modules/axios/index.d.ts:55

---

### transformRequest

• `Optional` **transformRequest**: `AxiosTransformer` \| `AxiosTransformer`[]

#### Inherited from

AxiosRequestConfig.transformRequest

#### Defined in

node_modules/axios/index.d.ts:48

---

### transformResponse

• `Optional` **transformResponse**: `AxiosTransformer` \| `AxiosTransformer`[]

#### Inherited from

AxiosRequestConfig.transformResponse

#### Defined in

node_modules/axios/index.d.ts:49

---

### unique

• `Optional` **unique**: `any`

#### Defined in

[src/index.ts:20](https://github.com/saqqdy/axios-q/blob/9ddde01/src/index.ts#L20)

---

### url

• `Optional` **url**: `string`

#### Inherited from

AxiosRequestConfig.url

#### Defined in

node_modules/axios/index.d.ts:45

---

### validateStatus

• `Optional` **validateStatus**: `null` \| (`status`: `number`) => `boolean`

#### Inherited from

AxiosRequestConfig.validateStatus

#### Defined in

node_modules/axios/index.d.ts:65

---

### withCredentials

• `Optional` **withCredentials**: `boolean`

#### Inherited from

AxiosRequestConfig.withCredentials

#### Defined in

node_modules/axios/index.d.ts:56

---

### xsrfCookieName

• `Optional` **xsrfCookieName**: `string`

#### Inherited from

AxiosRequestConfig.xsrfCookieName

#### Defined in

node_modules/axios/index.d.ts:60

---

### xsrfHeaderName

• `Optional` **xsrfHeaderName**: `string`

#### Inherited from

AxiosRequestConfig.xsrfHeaderName

#### Defined in

node_modules/axios/index.d.ts:61

## Methods

### onDownloadProgress

▸ `Optional` **onDownloadProgress**(`progressEvent`): `void`

#### Parameters

| Name            | Type  |
| :-------------- | :---- |
| `progressEvent` | `any` |

#### Returns

`void`

#### Inherited from

AxiosRequestConfig.onDownloadProgress

#### Defined in

node_modules/axios/index.d.ts:63

---

### onUploadProgress

▸ `Optional` **onUploadProgress**(`progressEvent`): `void`

#### Parameters

| Name            | Type  |
| :-------------- | :---- |
| `progressEvent` | `any` |

#### Returns

`void`

#### Inherited from

AxiosRequestConfig.onUploadProgress

#### Defined in

node_modules/axios/index.d.ts:62

---

### paramsSerializer

▸ `Optional` **paramsSerializer**(`params`): `string`

#### Parameters

| Name     | Type  |
| :------- | :---- |
| `params` | `any` |

#### Returns

`string`

#### Inherited from

AxiosRequestConfig.paramsSerializer

#### Defined in

node_modules/axios/index.d.ts:52
