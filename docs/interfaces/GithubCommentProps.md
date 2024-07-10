[juny-react-style](../README.md) / [Exports](../modules.md) / GithubCommentProps

# Interface: GithubCommentProps

## Table of contents

### Properties

- [active](GithubCommentProps.md#active)
- [comment](GithubCommentProps.md#comment)
- [isLoading](GithubCommentProps.md#isloading)
- [onChange](GithubCommentProps.md#onchange)
- [onClick](GithubCommentProps.md#onclick)
- [onSubmit](GithubCommentProps.md#onsubmit)
- [preview](GithubCommentProps.md#preview)

## Properties

### active

• `Optional` **active**: [`ActiveModeType`](../modules.md#activemodetype)

#### Defined in

[src/component/GithubComment/GithubComment.type.ts:4](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/GithubComment/GithubComment.type.ts#L4)

___

### comment

• `Optional` **comment**: `string`

#### Defined in

[src/component/GithubComment/GithubComment.type.ts:5](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/GithubComment/GithubComment.type.ts#L5)

___

### isLoading

• `Optional` **isLoading**: `boolean`

#### Defined in

[src/component/GithubComment/GithubComment.type.ts:6](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/GithubComment/GithubComment.type.ts#L6)

___

### onChange

• `Optional` **onChange**: (`comment`: `string`) => `void` \| `Promise`\<`void`\>

#### Type declaration

▸ (`comment`): `void` \| `Promise`\<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `comment` | `string` |

##### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

[src/component/GithubComment/GithubComment.type.ts:10](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/GithubComment/GithubComment.type.ts#L10)

___

### onClick

• `Optional` **onClick**: (`value`: [`ActiveModeType`](../modules.md#activemodetype), `comment`: `string`) => `void` \| `Promise`\<`void`\>

#### Type declaration

▸ (`value`, `comment`): `void` \| `Promise`\<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ActiveModeType`](../modules.md#activemodetype) |
| `comment` | `string` |

##### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

[src/component/GithubComment/GithubComment.type.ts:8](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/GithubComment/GithubComment.type.ts#L8)

___

### onSubmit

• `Optional` **onSubmit**: (`comment`: `string`) => `string` \| `void` \| `Promise`\<`string` \| `void`\>

#### Type declaration

▸ (`comment`): `string` \| `void` \| `Promise`\<`string` \| `void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `comment` | `string` |

##### Returns

`string` \| `void` \| `Promise`\<`string` \| `void`\>

#### Defined in

[src/component/GithubComment/GithubComment.type.ts:9](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/GithubComment/GithubComment.type.ts#L9)

___

### preview

• `Optional` **preview**: `ReactNode`

#### Defined in

[src/component/GithubComment/GithubComment.type.ts:7](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/GithubComment/GithubComment.type.ts#L7)
