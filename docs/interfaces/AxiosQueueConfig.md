[index.md - v1.1.5](../README.md) / [Exports](../modules.md) / AxiosQueueConfig

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

[src/index.ts:28](https://github.com/saqqdy/axios-q/blob/94b79fb/src/index.ts#L28)

---

### maxConnections

• `Optional` **maxConnections**: `number`

#### Defined in

[src/index.ts:29](https://github.com/saqqdy/axios-q/blob/94b79fb/src/index.ts#L29)

---

### retry

• `Optional` **retry**: `number`

#### Defined in

[src/index.ts:27](https://github.com/saqqdy/axios-q/blob/94b79fb/src/index.ts#L27)

---

### unique

• `Optional` **unique**: `boolean`

#### Defined in

[src/index.ts:30](https://github.com/saqqdy/axios-q/blob/94b79fb/src/index.ts#L30)

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

[src/index.ts:41](https://github.com/saqqdy/axios-q/blob/94b79fb/src/index.ts#L41)

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

[src/index.ts:40](https://github.com/saqqdy/axios-q/blob/94b79fb/src/index.ts#L40)

---

### onRequest

▸ `Optional` **onRequest**(`config`): [`AxiosQueueOptions`](AxiosQueueOptions.md) \| `Promise`<[`AxiosQueueOptions`](AxiosQueueOptions.md)\>

#### Parameters

| Name     | Type                                        |
| :------- | :------------------------------------------ |
| `config` | [`AxiosQueueOptions`](AxiosQueueOptions.md) |

#### Returns

[`AxiosQueueOptions`](AxiosQueueOptions.md) \| `Promise`<[`AxiosQueueOptions`](AxiosQueueOptions.md)\>

#### Defined in

[src/index.ts:32](https://github.com/saqqdy/axios-q/blob/94b79fb/src/index.ts#L32)

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

[src/index.ts:35](https://github.com/saqqdy/axios-q/blob/94b79fb/src/index.ts#L35)

---

### onResponse

▸ `Optional` **onResponse**(`res`): `AxiosResponse`<`any`, `any`\> \| `Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Parameters

| Name  | Type                           |
| :---- | :----------------------------- |
| `res` | `AxiosResponse`<`any`, `any`\> |

#### Returns

`AxiosResponse`<`any`, `any`\> \| `Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[src/index.ts:36](https://github.com/saqqdy/axios-q/blob/94b79fb/src/index.ts#L36)

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

[src/index.ts:39](https://github.com/saqqdy/axios-q/blob/94b79fb/src/index.ts#L39)

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

[src/index.ts:31](https://github.com/saqqdy/axios-q/blob/94b79fb/src/index.ts#L31)
