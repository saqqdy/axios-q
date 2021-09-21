[index.md - v1.1.4](../README.md) / [Exports](../modules.md) / AxiosQueueType

# Interface: AxiosQueueType

## Table of contents

### Properties

-   [%24axios](AxiosQueueType.md#$axios)
-   [queue](AxiosQueueType.md#queue)

### Methods

-   [create](AxiosQueueType.md#create)

## Properties

### $axios

• **$axios**: `any`

#### Defined in

[src/index.ts:17](https://github.com/saqqdy/axios-q/blob/f883c9e/src/index.ts#L17)

---

### queue

• **queue**: `Object`

#### Index signature

▪ [prop: `string`]: [`AxiosQueueObject`](AxiosQueueObject.md)[]

#### Defined in

[src/index.ts:14](https://github.com/saqqdy/axios-q/blob/f883c9e/src/index.ts#L14)

## Methods

### create

▸ **create**(`options`, `config`): `Promise`<`any`\>

#### Parameters

| Name      | Type                                        |
| :-------- | :------------------------------------------ |
| `options` | [`AxiosQueueOptions`](AxiosQueueOptions.md) |
| `config`  | [`AxiosQueueConfig`](AxiosQueueConfig.md)   |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/index.ts:18](https://github.com/saqqdy/axios-q/blob/f883c9e/src/index.ts#L18)
