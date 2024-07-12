[juny-react-style](../README.md) / [Exports](../modules.md) / TreeListProps

# Interface: TreeListProps\<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | \{ `[key: string]`: `any`;  } |

## Table of contents

### Properties

- [icon](TreeListProps.md#icon)
- [items](TreeListProps.md#items)
- [onClick](TreeListProps.md#onclick)
- [title](TreeListProps.md#title)

## Properties

### icon

• `Optional` **icon**: `ReactNode`

#### Defined in

[src/component/TreeList/TreeList.type.ts:12](https://github.com/jun-young1993/react-style/blob/4abd92ee00cf87c10f8dd66e04c24d62ede0ae9b/src/component/TreeList/TreeList.type.ts#L12)

___

### items

• `Optional` **items**: [] \| [`TreeItemProps`](TreeItemProps.md)\<`T`\>[]

#### Defined in

[src/component/TreeList/TreeList.type.ts:13](https://github.com/jun-young1993/react-style/blob/4abd92ee00cf87c10f8dd66e04c24d62ede0ae9b/src/component/TreeList/TreeList.type.ts#L13)

___

### onClick

• `Optional` **onClick**: (`item`: [`TreeItemProps`](TreeItemProps.md)\<`T`\>) => `void`

#### Type declaration

▸ (`item`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`TreeItemProps`](TreeItemProps.md)\<`T`\> |

##### Returns

`void`

#### Defined in

[src/component/TreeList/TreeList.type.ts:10](https://github.com/jun-young1993/react-style/blob/4abd92ee00cf87c10f8dd66e04c24d62ede0ae9b/src/component/TreeList/TreeList.type.ts#L10)

___

### title

• `Optional` **title**: `ReactNode`

#### Defined in

[src/component/TreeList/TreeList.type.ts:11](https://github.com/jun-young1993/react-style/blob/4abd92ee00cf87c10f8dd66e04c24d62ede0ae9b/src/component/TreeList/TreeList.type.ts#L11)
