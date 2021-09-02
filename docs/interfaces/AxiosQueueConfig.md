[index.md - v1.1.0](../README.md) / [Exports](../modules.md) / AxiosQueueConfig

# Interface: AxiosQueueConfig

## Table of contents

### Properties

-   [interval](AxiosQueueConfig.md#interval)
-   [maxConnections](AxiosQueueConfig.md#maxconnections)
-   [retry](AxiosQueueConfig.md#retry)
-   [unique](AxiosQueueConfig.md#unique)

### Methods

-   [onCancel](AxiosQueueConfig.md#oncancel)
-   [onError](AxiosQueueConfig.md#onerror)
-   [onRequest](AxiosQueueConfig.md#onrequest)
-   [onRequestError](AxiosQueueConfig.md#onrequesterror)
-   [onResponse](AxiosQueueConfig.md#onresponse)
-   [onResponseError](AxiosQueueConfig.md#onresponseerror)
-   [setHeaders](AxiosQueueConfig.md#setheaders)

## Properties

### interval

• `Optional` **interval**: `number`

#### Defined in

[index.ts:19](https://github.com/saqqdy/axios-q/blob/42fea8d/src/index.ts#L19)

---

### maxConnections

• `Optional` **maxConnections**: `number`

#### Defined in

[index.ts:20](https://github.com/saqqdy/axios-q/blob/42fea8d/src/index.ts#L20)

---

### retry

• `Optional` **retry**: `number`

#### Defined in

[index.ts:18](https://github.com/saqqdy/axios-q/blob/42fea8d/src/index.ts#L18)

---

### unique

• `Optional` **unique**: `boolean`

#### Defined in

[index.ts:21](https://github.com/saqqdy/axios-q/blob/42fea8d/src/index.ts#L21)

## Methods

### onCancel

▸ `Optional` **onCancel**(`error`): `void`

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `error` | `any` |

#### Returns

`void`

#### Defined in

[index.ts:28](https://github.com/saqqdy/axios-q/blob/42fea8d/src/index.ts#L28)

---

### onError

▸ `Optional` **onError**(`error`): `void`

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `error` | `any` |

#### Returns

`void`

#### Defined in

[index.ts:27](https://github.com/saqqdy/axios-q/blob/42fea8d/src/index.ts#L27)

---

### onRequest

▸ `Optional` **onRequest**(`config`): `AxiosRequestConfig` \| `Promise`<`AxiosRequestConfig`\>

#### Parameters

| Name     | Type                 |
| :------- | :------------------- |
| `config` | `AxiosRequestConfig` |

#### Returns

`AxiosRequestConfig` \| `Promise`<`AxiosRequestConfig`\>

#### Defined in

[index.ts:23](https://github.com/saqqdy/axios-q/blob/42fea8d/src/index.ts#L23)

---

### onRequestError

▸ `Optional` **onRequestError**(`error`): `void`

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `error` | `any` |

#### Returns

`void`

#### Defined in

[index.ts:24](https://github.com/saqqdy/axios-q/blob/42fea8d/src/index.ts#L24)

---

### onResponse

▸ `Optional` **onResponse**(`res`): `AxiosResponse`<`any`\> \| `Promise`<`AxiosResponse`<`any`\>\>

#### Parameters

| Name  | Type                    |
| :---- | :---------------------- |
| `res` | `AxiosResponse`<`any`\> |

#### Returns

`AxiosResponse`<`any`\> \| `Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[index.ts:25](https://github.com/saqqdy/axios-q/blob/42fea8d/src/index.ts#L25)

---

### onResponseError

▸ `Optional` **onResponseError**(`error`): `void`

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `error` | `any` |

#### Returns

`void`

#### Defined in

[index.ts:26](https://github.com/saqqdy/axios-q/blob/42fea8d/src/index.ts#L26)

---

### setHeaders

▸ `Optional` **setHeaders**(`instance`): `void`

#### Parameters

| Name       | Type            |
| :--------- | :-------------- |
| `instance` | `AxiosInstance` |

#### Returns

`void`

#### Defined in

[index.ts:22](https://github.com/saqqdy/axios-q/blob/42fea8d/src/index.ts#L22)
