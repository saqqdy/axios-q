[index.md - v1.1.1](../README.md) / [Exports](../modules.md) / AxiosQueueType

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

[index.ts:13](https://github.com/saqqdy/axios-q/blob/7b523ab/src/index.ts#L13)

---

### queue

• **queue**: `Object`

#### Index signature

▪ [prop: `string`]: [`AxiosQueueObject`](AxiosQueueObject.md)[]

#### Defined in

[index.ts:10](https://github.com/saqqdy/axios-q/blob/7b523ab/src/index.ts#L10)

## Methods

### create

▸ **create**(`options`, `config`): `Promise`<`any`\>

#### Parameters

| Name      | Type                                      |
| :-------- | :---------------------------------------- |
| `options` | `AxiosRequestConfig`                      |
| `config`  | [`AxiosQueueConfig`](AxiosQueueConfig.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[index.ts:14](https://github.com/saqqdy/axios-q/blob/7b523ab/src/index.ts#L14)
