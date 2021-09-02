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

[index.ts:13](https://github.com/saqqdy/axios-q/blob/3cee2c6/src/index.ts#L13)

---

### maxConnections

• `Optional` **maxConnections**: `number`

#### Defined in

[index.ts:14](https://github.com/saqqdy/axios-q/blob/3cee2c6/src/index.ts#L14)

---

### retry

• `Optional` **retry**: `number`

#### Defined in

[index.ts:12](https://github.com/saqqdy/axios-q/blob/3cee2c6/src/index.ts#L12)

---

### unique

• `Optional` **unique**: `boolean`

#### Defined in

[index.ts:15](https://github.com/saqqdy/axios-q/blob/3cee2c6/src/index.ts#L15)

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

[index.ts:22](https://github.com/saqqdy/axios-q/blob/3cee2c6/src/index.ts#L22)

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

[index.ts:21](https://github.com/saqqdy/axios-q/blob/3cee2c6/src/index.ts#L21)

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

[index.ts:17](https://github.com/saqqdy/axios-q/blob/3cee2c6/src/index.ts#L17)

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

[index.ts:18](https://github.com/saqqdy/axios-q/blob/3cee2c6/src/index.ts#L18)

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

[index.ts:19](https://github.com/saqqdy/axios-q/blob/3cee2c6/src/index.ts#L19)

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

[index.ts:20](https://github.com/saqqdy/axios-q/blob/3cee2c6/src/index.ts#L20)

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

[index.ts:16](https://github.com/saqqdy/axios-q/blob/3cee2c6/src/index.ts#L16)
