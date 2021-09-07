[index.md - v1.1.1](../README.md) / [Exports](../modules.md) / AxiosQueueOptions

# Interface: AxiosQueueOptions

## Hierarchy

-   `AxiosRequestConfig`

    ↳ **`AxiosQueueOptions`**

## Indexable

▪ [prop: `string`]: `any`

## Table of contents

### Properties

-   [adapter](AxiosQueueOptions.md#adapter)
-   [auth](AxiosQueueOptions.md#auth)
-   [baseURL](AxiosQueueOptions.md#baseurl)
-   [cancelToken](AxiosQueueOptions.md#canceltoken)
-   [data](AxiosQueueOptions.md#data)
-   [decompress](AxiosQueueOptions.md#decompress)
-   [headers](AxiosQueueOptions.md#headers)
-   [httpAgent](AxiosQueueOptions.md#httpagent)
-   [httpsAgent](AxiosQueueOptions.md#httpsagent)
-   [maxBodyLength](AxiosQueueOptions.md#maxbodylength)
-   [maxContentLength](AxiosQueueOptions.md#maxcontentlength)
-   [maxRedirects](AxiosQueueOptions.md#maxredirects)
-   [method](AxiosQueueOptions.md#method)
-   [params](AxiosQueueOptions.md#params)
-   [proxy](AxiosQueueOptions.md#proxy)
-   [responseType](AxiosQueueOptions.md#responsetype)
-   [socketPath](AxiosQueueOptions.md#socketpath)
-   [timeout](AxiosQueueOptions.md#timeout)
-   [timeoutErrorMessage](AxiosQueueOptions.md#timeouterrormessage)
-   [transformRequest](AxiosQueueOptions.md#transformrequest)
-   [transformResponse](AxiosQueueOptions.md#transformresponse)
-   [url](AxiosQueueOptions.md#url)
-   [validateStatus](AxiosQueueOptions.md#validatestatus)
-   [withCredentials](AxiosQueueOptions.md#withcredentials)
-   [xsrfCookieName](AxiosQueueOptions.md#xsrfcookiename)
-   [xsrfHeaderName](AxiosQueueOptions.md#xsrfheadername)

### Methods

-   [onDownloadProgress](AxiosQueueOptions.md#ondownloadprogress)
-   [onUploadProgress](AxiosQueueOptions.md#onuploadprogress)
-   [paramsSerializer](AxiosQueueOptions.md#paramsserializer)

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

### maxBodyLength

• `Optional` **maxBodyLength**: `number`

#### Inherited from

AxiosRequestConfig.maxBodyLength

#### Defined in

node_modules/axios/index.d.ts:66

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
