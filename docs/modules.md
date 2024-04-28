[juny-react-style](README.md) / Exports

# juny-react-style

## Table of contents

### Type Aliases

- [cornersType](modules.md#cornerstype)
- [radius](modules.md#radius)
- [size](modules.md#size)

### Functions

- [AlignBox](modules.md#alignbox)
- [GithubProfile](modules.md#githubprofile)
- [LeftRightContainer](modules.md#leftrightcontainer)
- [Link](modules.md#link)
- [Profile](modules.md#profile)
- [Spinner](modules.md#spinner)

## Type Aliases

### cornersType

Ƭ **cornersType**: ``"sm"`` \| ``"md"`` \| ``"lg"`` \| ``"full"``

#### Defined in

[index.types.ts:1](https://github.com/jun-young1993/react-style/blob/e8a4a922d35bf7e53f2489fd1c6a2322279f8ad9/src/component/index.types.ts#L1)

___

### radius

Ƭ **radius**: ``"sm"`` \| ``"md"`` \| ``"lg"`` \| ``"full"``

#### Defined in

[index.types.ts:5](https://github.com/jun-young1993/react-style/blob/e8a4a922d35bf7e53f2489fd1c6a2322279f8ad9/src/component/index.types.ts#L5)

___

### size

Ƭ **size**: `number`

#### Defined in

[index.types.ts:2](https://github.com/jun-young1993/react-style/blob/e8a4a922d35bf7e53f2489fd1c6a2322279f8ad9/src/component/index.types.ts#L2)

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

[alignBox/AlignBox.tsx:27](https://github.com/jun-young1993/react-style/blob/e8a4a922d35bf7e53f2489fd1c6a2322279f8ad9/src/component/alignBox/AlignBox.tsx#L27)

___

### GithubProfile

▸ **GithubProfile**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `GithubProfileProps` |

#### Returns

`Element`

#### Defined in

[githubProfile/GithubProfile.tsx:7](https://github.com/jun-young1993/react-style/blob/e8a4a922d35bf7e53f2489fd1c6a2322279f8ad9/src/component/githubProfile/GithubProfile.tsx#L7)

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

[leftRightContainer/LeftRightContainer.tsx:32](https://github.com/jun-young1993/react-style/blob/e8a4a922d35bf7e53f2489fd1c6a2322279f8ad9/src/component/leftRightContainer/LeftRightContainer.tsx#L32)

___

### Link

▸ **Link**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `LinkProps` |

#### Returns

`Element`

#### Defined in

[link/Link.tsx:14](https://github.com/jun-young1993/react-style/blob/e8a4a922d35bf7e53f2489fd1c6a2322279f8ad9/src/component/link/Link.tsx#L14)

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

[profile/Profile.tsx:51](https://github.com/jun-young1993/react-style/blob/e8a4a922d35bf7e53f2489fd1c6a2322279f8ad9/src/component/profile/Profile.tsx#L51)

___

### Spinner

▸ **Spinner**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `SpinnerProps` |

#### Returns

`Element`

#### Defined in

[spinner/Spinner.tsx:28](https://github.com/jun-young1993/react-style/blob/e8a4a922d35bf7e53f2489fd1c6a2322279f8ad9/src/component/spinner/Spinner.tsx#L28)
