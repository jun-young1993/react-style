[juny-react-style](README.md) / Exports

# juny-react-style

## Table of contents

### Type Aliases

- [cornersType](modules.md#cornerstype)
- [lefetOrRightOrTopOrBottom](modules.md#lefetorrightortoporbottom)
- [radius](modules.md#radius)
- [size](modules.md#size)

### Functions

- [AlignBox](modules.md#alignbox)
- [GithubProfile](modules.md#githubprofile)
- [LeftRightContainer](modules.md#leftrightcontainer)
- [Link](modules.md#link)
- [MarginBox](modules.md#marginbox)
- [Profile](modules.md#profile)
- [Spinner](modules.md#spinner)

## Type Aliases

### cornersType

Ƭ **cornersType**: ``"sm"`` \| ``"md"`` \| ``"lg"`` \| ``"full"``

#### Defined in

[index.types.ts:1](https://github.com/jun-young1993/react-style/blob/ccefd3c15eac8d7807ca30c991576257c857db1c/src/component/index.types.ts#L1)

___

### lefetOrRightOrTopOrBottom

Ƭ **lefetOrRightOrTopOrBottom**: ``"left"`` \| ``"right"`` \| ``"top"`` \| ``"bottom"``

#### Defined in

[index.types.ts:6](https://github.com/jun-young1993/react-style/blob/ccefd3c15eac8d7807ca30c991576257c857db1c/src/component/index.types.ts#L6)

___

### radius

Ƭ **radius**: ``"sm"`` \| ``"md"`` \| ``"lg"`` \| ``"full"``

#### Defined in

[index.types.ts:5](https://github.com/jun-young1993/react-style/blob/ccefd3c15eac8d7807ca30c991576257c857db1c/src/component/index.types.ts#L5)

___

### size

Ƭ **size**: `number`

#### Defined in

[index.types.ts:2](https://github.com/jun-young1993/react-style/blob/ccefd3c15eac8d7807ca30c991576257c857db1c/src/component/index.types.ts#L2)

## Functions

### AlignBox

▸ **AlignBox**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `AlignBoxProps` |

#### Returns

`Element`

**`Example`**

```
 <AlignBox
     align={'left'}
  >
     <div>left</div>
 </AlignBox>
```

#### Defined in

[alignBox/AlignBox.tsx:30](https://github.com/jun-young1993/react-style/blob/ccefd3c15eac8d7807ca30c991576257c857db1c/src/component/alignBox/AlignBox.tsx#L30)

___

### GithubProfile

▸ **GithubProfile**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `GithubProfileProps` |

#### Returns

`Element`

**`Example`**

```tsx
	<GithubProfile
		gitPersonalAccessToken={"ghp~###"}
	/>
	</GithubProfile>
```

#### Defined in

[githubProfile/GithubProfile.tsx:22](https://github.com/jun-young1993/react-style/blob/ccefd3c15eac8d7807ca30c991576257c857db1c/src/component/githubProfile/GithubProfile.tsx#L22)

___

### LeftRightContainer

▸ **LeftRightContainer**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `LeftRightLayoutProps` |

#### Returns

`Element`

**`Example`**

```
<LeftRightContainer
 ratio={0.3}
>
    <div>
        left content
    </div>
    <div>
        right content
    </div>
</LeftRightContainer>
```

#### Defined in

[leftRightContainer/LeftRightContainer.tsx:32](https://github.com/jun-young1993/react-style/blob/ccefd3c15eac8d7807ca30c991576257c857db1c/src/component/leftRightContainer/LeftRightContainer.tsx#L32)

___

### Link

▸ **Link**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `LinkProps` |

#### Returns

`Element`

**`Example`**

```tsx
 <Link 
   href="https://juny.vercel.app" 
 />
```

#### Defined in

[link/Link.tsx:29](https://github.com/jun-young1993/react-style/blob/ccefd3c15eac8d7807ca30c991576257c857db1c/src/component/link/Link.tsx#L29)

___

### MarginBox

▸ **MarginBox**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `MarginBoxProps` |

#### Returns

`Element`

**`Example`**

```
	<MarginBox
		bottom={"1px"}
 		top={"1px"}
		right={"1px"}
		left={"1px"}
     >
		<div>foo</div>
	<MarginBox>
```

#### Defined in

marginBox/MarginBox.tsx:28

___

### Profile

▸ **Profile**(`props`): `Element`

The Profile component is used to display user profile information.
ProfileProps defines the properties that can be passed to the Profile component.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | `ProfileProps` | The properties passed to the Profile component |

#### Returns

`Element`

The Profile component

#### Defined in

[profile/Profile.tsx:51](https://github.com/jun-young1993/react-style/blob/ccefd3c15eac8d7807ca30c991576257c857db1c/src/component/profile/Profile.tsx#L51)

___

### Spinner

▸ **Spinner**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `SpinnerProps` |

#### Returns

`Element`

```
	<Spinner width={"10px"} height={"10px"} />
```

#### Defined in

[spinner/Spinner.tsx:35](https://github.com/jun-young1993/react-style/blob/ccefd3c15eac8d7807ca30c991576257c857db1c/src/component/spinner/Spinner.tsx#L35)
