[index.md - v1.0.3](../README.md) / [Exports](../modules.md) / AxiosQueueType

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

[src/index.ts:9](https://github.com/saqqdy/axios-q/blob/10a3fa9/src/index.ts#L9)

---

### queue

• **queue**: `Object`

#### Index signature

▪ [prop: `string`]: `any`

#### Defined in

[src/index.ts:6](https://github.com/saqqdy/axios-q/blob/10a3fa9/src/index.ts#L6)

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

[src/index.ts:10](https://github.com/saqqdy/axios-q/blob/10a3fa9/src/index.ts#L10)
