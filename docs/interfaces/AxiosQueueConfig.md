[index.md - v1.1.2](../README.md) / [Exports](../modules.md) / AxiosQueueConfig

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

[src/index.ts:23](https://github.com/saqqdy/axios-q/blob/b3f876a/src/index.ts#L23)

---

### maxConnections

• `Optional` **maxConnections**: `number`

#### Defined in

[src/index.ts:24](https://github.com/saqqdy/axios-q/blob/b3f876a/src/index.ts#L24)

---

### retry

• `Optional` **retry**: `number`

#### Defined in

[src/index.ts:22](https://github.com/saqqdy/axios-q/blob/b3f876a/src/index.ts#L22)

---

### unique

• `Optional` **unique**: `boolean`

#### Defined in

[src/index.ts:25](https://github.com/saqqdy/axios-q/blob/b3f876a/src/index.ts#L25)

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

[src/index.ts:32](https://github.com/saqqdy/axios-q/blob/b3f876a/src/index.ts#L32)

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

[src/index.ts:31](https://github.com/saqqdy/axios-q/blob/b3f876a/src/index.ts#L31)

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

[src/index.ts:27](https://github.com/saqqdy/axios-q/blob/b3f876a/src/index.ts#L27)

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

[src/index.ts:28](https://github.com/saqqdy/axios-q/blob/b3f876a/src/index.ts#L28)

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

[src/index.ts:29](https://github.com/saqqdy/axios-q/blob/b3f876a/src/index.ts#L29)

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

[src/index.ts:30](https://github.com/saqqdy/axios-q/blob/b3f876a/src/index.ts#L30)

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

[src/index.ts:26](https://github.com/saqqdy/axios-q/blob/b3f876a/src/index.ts#L26)
