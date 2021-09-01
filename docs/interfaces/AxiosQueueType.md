[index.md - v1.1.0](../README.md) / [Exports](../modules.md) / AxiosQueueType

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

[src/index.ts:7](https://github.com/saqqdy/axios-q/blob/9ddde01/src/index.ts#L7)

---

### queue

• **queue**: `Object`

#### Index signature

▪ [prop: `string`]: `any`

#### Defined in

[src/index.ts:4](https://github.com/saqqdy/axios-q/blob/9ddde01/src/index.ts#L4)

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

[src/index.ts:8](https://github.com/saqqdy/axios-q/blob/9ddde01/src/index.ts#L8)
