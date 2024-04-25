[juny-react-style](README.md) / Exports

# juny-react-style

## Table of contents

### Type Aliases

- [sizeType](modules.md#sizetype)

### Functions

- [Button](modules.md#button)
- [Profile](modules.md#profile)

## Type Aliases

### sizeType

Ƭ **sizeType**: ``"sm"`` \| ``"md"`` \| ``"lg"``

#### Defined in

src/component/index.types.ts:1

## Functions

### Button

▸ **Button**(`props`, `context?`): `ReactNode`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `ButtonProps` |
| `context?` | `any` |

#### Returns

`ReactNode`

#### Defined in

[src/component/button/Button.tsx:8](https://github.com/jun-young1993/react-style/blob/d88a55a3953a5cf2889a22955e574f6af4b0f5ab/src/component/button/Button.tsx#L8)

___

### Profile

▸ **Profile**\<`AsTarget`, `ForwardedAsTarget`\>(`props`): `Element`

The Profile component is used to display user profile information.
ProfileProps defines the properties that can be passed to the Profile component.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AsTarget` | extends `void` \| `WebTarget` = `void` |
| `ForwardedAsTarget` | extends `void` \| `WebTarget` = `void` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | `PolymorphicComponentProps`\<``"web"``, `Substitute`\<`DetailedHTMLProps`\<`HTMLAttributes`\<`HTMLDivElement`\>, `HTMLDivElement`\>, `ProfileProps`\>, `AsTarget`, `ForwardedAsTarget`, `AsTarget` extends `KnownTarget` ? `ComponentPropsWithRef`\<`AsTarget`\<`AsTarget`\>\> : {}, `ForwardedAsTarget` extends `KnownTarget` ? `ComponentPropsWithRef`\<`ForwardedAsTarget`\<`ForwardedAsTarget`\>\> : {}\> | The properties passed to the Profile component |

#### Returns

`Element`

The Profile component

#### Defined in

[src/component/profile/Profile.tsx:11](https://github.com/jun-young1993/react-style/blob/d88a55a3953a5cf2889a22955e574f6af4b0f5ab/src/component/profile/Profile.tsx#L11)

▸ **Profile**(`props`): `ReactNode`

The Profile component is used to display user profile information.
ProfileProps defines the properties that can be passed to the Profile component.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | `Substitute`\<`DetailedHTMLProps`\<`HTMLAttributes`\<`HTMLDivElement`\>, `HTMLDivElement`\>, `ProfileProps`\> | The properties passed to the Profile component |

#### Returns

`ReactNode`

The Profile component

#### Defined in

[src/component/profile/Profile.tsx:11](https://github.com/jun-young1993/react-style/blob/d88a55a3953a5cf2889a22955e574f6af4b0f5ab/src/component/profile/Profile.tsx#L11)
