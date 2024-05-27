[juny-react-style](README.md) / Exports

# juny-react-style

## Table of contents

### References

- [SplitContainer](modules.md#splitcontainer)

### Type Aliases

- [IntrinsicElementsDiv](modules.md#intrinsicelementsdiv)
- [cornersType](modules.md#cornerstype)
- [lefetOrRightOrTopOrBottom](modules.md#lefetorrightortoporbottom)
- [radius](modules.md#radius)
- [size](modules.md#size)

### Functions

- [AlignBox](modules.md#alignbox)
- [GithubProfile](modules.md#githubprofile)
- [LeftRightContainer](modules.md#leftrightcontainer)
- [Link](modules.md#link)
- [List](modules.md#list)
- [ListItem](modules.md#listitem)
- [MarginBox](modules.md#marginbox)
- [Profile](modules.md#profile)
- [Spinner](modules.md#spinner)
- [TextOverFlow](modules.md#textoverflow)

## References

### SplitContainer

Renames and re-exports [LeftRightContainer](modules.md#leftrightcontainer)

## Type Aliases

### IntrinsicElementsDiv

Ƭ **IntrinsicElementsDiv**: `React.DetailedHTMLProps`\<`React.HTMLAttributes`\<`HTMLDivElement`\>, `HTMLDivElement`\>

#### Defined in

[index.types.ts:10](https://github.com/jun-young1993/react-style/blob/8704f92acecf97c92d63b22ccba748ea060e134d/src/component/index.types.ts#L10)

___

### cornersType

Ƭ **cornersType**: ``"sm"`` \| ``"md"`` \| ``"lg"`` \| ``"full"``

#### Defined in

[index.types.ts:3](https://github.com/jun-young1993/react-style/blob/8704f92acecf97c92d63b22ccba748ea060e134d/src/component/index.types.ts#L3)

___

### lefetOrRightOrTopOrBottom

Ƭ **lefetOrRightOrTopOrBottom**: ``"left"`` \| ``"right"`` \| ``"top"`` \| ``"bottom"``

#### Defined in

[index.types.ts:8](https://github.com/jun-young1993/react-style/blob/8704f92acecf97c92d63b22ccba748ea060e134d/src/component/index.types.ts#L8)

___

### radius

Ƭ **radius**: ``"sm"`` \| ``"md"`` \| ``"lg"`` \| ``"full"``

#### Defined in

[index.types.ts:7](https://github.com/jun-young1993/react-style/blob/8704f92acecf97c92d63b22ccba748ea060e134d/src/component/index.types.ts#L7)

___

### size

Ƭ **size**: `number`

#### Defined in

[index.types.ts:4](https://github.com/jun-young1993/react-style/blob/8704f92acecf97c92d63b22ccba748ea060e134d/src/component/index.types.ts#L4)

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

[alignBox/AlignBox.tsx:30](https://github.com/jun-young1993/react-style/blob/8704f92acecf97c92d63b22ccba748ea060e134d/src/component/alignBox/AlignBox.tsx#L30)

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

[githubProfile/GithubProfile.tsx:23](https://github.com/jun-young1993/react-style/blob/8704f92acecf97c92d63b22ccba748ea060e134d/src/component/githubProfile/GithubProfile.tsx#L23)

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

[leftRightContainer/LeftRightContainer.tsx:38](https://github.com/jun-young1993/react-style/blob/8704f92acecf97c92d63b22ccba748ea060e134d/src/component/leftRightContainer/LeftRightContainer.tsx#L38)

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

[link/Link.tsx:33](https://github.com/jun-young1993/react-style/blob/8704f92acecf97c92d63b22ccba748ea060e134d/src/component/link/Link.tsx#L33)

___

### List

▸ **List**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `ListProps` |

#### Returns

`Element`

#### Defined in

[list/List.tsx:40](https://github.com/jun-young1993/react-style/blob/8704f92acecf97c92d63b22ccba748ea060e134d/src/component/list/List.tsx#L40)

___

### ListItem

▸ **ListItem**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `ListItemProps` |

#### Returns

`Element`

#### Defined in

[list/List.item.tsx:23](https://github.com/jun-young1993/react-style/blob/8704f92acecf97c92d63b22ccba748ea060e134d/src/component/list/List.item.tsx#L23)

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

[marginBox/MarginBox.tsx:28](https://github.com/jun-young1993/react-style/blob/8704f92acecf97c92d63b22ccba748ea060e134d/src/component/marginBox/MarginBox.tsx#L28)

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

[profile/Profile.tsx:51](https://github.com/jun-young1993/react-style/blob/8704f92acecf97c92d63b22ccba748ea060e134d/src/component/profile/Profile.tsx#L51)

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

[spinner/Spinner.tsx:35](https://github.com/jun-young1993/react-style/blob/8704f92acecf97c92d63b22ccba748ea060e134d/src/component/spinner/Spinner.tsx#L35)

___

### TextOverFlow

▸ **TextOverFlow**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `TextOverFlowProps` |

#### Returns

`Element`

**`Example`**

```tsx
 <TextOverFlow>foo</TextOverFlow>
```

#### Defined in

[textOverFlow/TextOverFlow.tsx:20](https://github.com/jun-young1993/react-style/blob/8704f92acecf97c92d63b22ccba748ea060e134d/src/component/textOverFlow/TextOverFlow.tsx#L20)
