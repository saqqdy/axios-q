[index.md - v1.1.5](../README.md) / [Exports](../modules.md) / AxiosQueueType

# Interface: AxiosQueueType

## Table of contents

### Properties

-   [$axios](AxiosQueueType.md#$axios)
-   [queue](AxiosQueueType.md#queue)

### Methods

-   [create](AxiosQueueType.md#create)

## Properties

### $axios

• **$axios**: `any`

#### Defined in

[src/index.ts:22](https://github.com/saqqdy/axios-q/blob/94b79fb/src/index.ts#L22)

---

### queue

• **queue**: `Object`

#### Index signature

▪ [prop: `string`]: [`AxiosQueueObject`](AxiosQueueObject.md)[]

#### Defined in

[src/index.ts:19](https://github.com/saqqdy/axios-q/blob/94b79fb/src/index.ts#L19)

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

[src/index.ts:23](https://github.com/saqqdy/axios-q/blob/94b79fb/src/index.ts#L23)
