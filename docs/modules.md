[juny-react-style](README.md) / Exports

# juny-react-style

## Table of contents

### References

- [SplitContainer](modules.md#splitcontainer)

### Interfaces

- [AlertProps](interfaces/AlertProps.md)
- [AlertWrapProps](interfaces/AlertWrapProps.md)
- [GithubCommentProps](interfaces/GithubCommentProps.md)
- [GithubReplyProps](interfaces/GithubReplyProps.md)
- [MacContainerProps](interfaces/MacContainerProps.md)
- [SearchBarProps](interfaces/SearchBarProps.md)
- [TreeItemProps](interfaces/TreeItemProps.md)
- [TreeListProps](interfaces/TreeListProps.md)

### Type Aliases

- [ActiveModeType](modules.md#activemodetype)
- [CursorType](modules.md#cursortype)
- [IntrinsicElementsDiv](modules.md#intrinsicelementsdiv)
- [cornersType](modules.md#cornerstype)
- [lefetOrRightOrTopOrBottom](modules.md#lefetorrightortoporbottom)
- [radius](modules.md#radius)
- [size](modules.md#size)

### Variables

- [ActiveMode](modules.md#activemode)
- [DarkTheme](modules.md#darktheme)
- [LightTheme](modules.md#lighttheme)

### Functions

- [Alert](modules.md#alert)
- [AlertContainer](modules.md#alertcontainer)
- [AlertItem](modules.md#alertitem)
- [AlertWrap](modules.md#alertwrap)
- [AlignBox](modules.md#alignbox)
- [BetweenContainer](modules.md#betweencontainer)
- [CustomTheme](modules.md#customtheme)
- [DarkAndLightModeButton](modules.md#darkandlightmodebutton)
- [GithubComment](modules.md#githubcomment)
- [GithubProfile](modules.md#githubprofile)
- [GithubReply](modules.md#githubreply)
- [HeadText](modules.md#headtext)
- [LeftRightContainer](modules.md#leftrightcontainer)
- [Link](modules.md#link)
- [List](modules.md#list)
- [ListItem](modules.md#listitem)
- [MacContainer](modules.md#maccontainer)
- [MacContainerHeader](modules.md#maccontainerheader)
- [MacMenuBar](modules.md#macmenubar)
- [MacMenuBarItem](modules.md#macmenubaritem)
- [MarginBox](modules.md#marginbox)
- [Profile](modules.md#profile)
- [Screen](modules.md#screen)
- [SearchBar](modules.md#searchbar)
- [SearchModal](modules.md#searchmodal)
- [Spinner](modules.md#spinner)
- [StyleThemeContextProvider](modules.md#stylethemecontextprovider)
- [StyleThemeProvider](modules.md#stylethemeprovider)
- [StyledAlert](modules.md#styledalert)
- [TextBox](modules.md#textbox)
- [TextOverFlow](modules.md#textoverflow)
- [TreeHeader](modules.md#treeheader)
- [TreeItem](modules.md#treeitem)
- [TreeList](modules.md#treelist)
- [useTheme](modules.md#usetheme)

## References

### SplitContainer

Renames and re-exports [LeftRightContainer](modules.md#leftrightcontainer)

## Type Aliases

### ActiveModeType

Ƭ **ActiveModeType**: typeof [`ActiveMode`](modules.md#activemode)[keyof typeof [`ActiveMode`](modules.md#activemode)]

#### Defined in

[src/component/GithubComment/GithubComment.type.ts:18](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/GithubComment/GithubComment.type.ts#L18)

___

### CursorType

Ƭ **CursorType**: ``"default"`` \| ``"pointer"`` \| ``"crosshair"`` \| ``"text"`` \| ``"move"`` \| ``"wait"`` \| ``"help"`` \| ``"not-allowed"`` \| ``"progress"`` \| ``"context-menu"`` \| ``"cell"`` \| ``"vertical-text"`` \| ``"alias"`` \| ``"copy"`` \| ``"no-drop"`` \| ``"grab"`` \| ``"grabbing"`` \| ``"all-scroll"`` \| ``"zoom-in"`` \| ``"zoom-out"``

#### Defined in

[src/component/index.types.ts:12](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/index.types.ts#L12)

___

### IntrinsicElementsDiv

Ƭ **IntrinsicElementsDiv**: `React.DetailedHTMLProps`\<`React.HTMLAttributes`\<`HTMLDivElement`\>, `HTMLDivElement`\>

#### Defined in

[src/component/index.types.ts:10](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/index.types.ts#L10)

___

### cornersType

Ƭ **cornersType**: ``"sm"`` \| ``"md"`` \| ``"lg"`` \| ``"full"``

#### Defined in

[src/component/index.types.ts:3](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/index.types.ts#L3)

___

### lefetOrRightOrTopOrBottom

Ƭ **lefetOrRightOrTopOrBottom**: ``"left"`` \| ``"right"`` \| ``"top"`` \| ``"bottom"``

#### Defined in

[src/component/index.types.ts:8](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/index.types.ts#L8)

___

### radius

Ƭ **radius**: ``"sm"`` \| ``"md"`` \| ``"lg"`` \| ``"full"``

#### Defined in

[src/component/index.types.ts:7](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/index.types.ts#L7)

___

### size

Ƭ **size**: `number`

#### Defined in

[src/component/index.types.ts:4](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/index.types.ts#L4)

## Variables

### ActiveMode

• `Const` **ActiveMode**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `PREVIEW` | ``"preivew"`` |
| `WRITE` | ``"write"`` |

#### Defined in

[src/component/GithubComment/GithubComment.type.ts:13](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/GithubComment/GithubComment.type.ts#L13)

___

### DarkTheme

• `Const` **DarkTheme**: `ThemeType`

#### Defined in

[src/component/StyleThemeProvider/DarkTheme.ts:3](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/StyleThemeProvider/DarkTheme.ts#L3)

___

### LightTheme

• `Const` **LightTheme**: `ThemeType`

#### Defined in

[src/component/StyleThemeProvider/LightTheme.ts:3](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/StyleThemeProvider/LightTheme.ts#L3)

## Functions

### Alert

▸ **Alert**(`props`, `context?`): `ReactNode`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`AlertProps`](interfaces/AlertProps.md) |
| `context?` | `any` |

#### Returns

`ReactNode`

#### Defined in

[src/component/Alert/Alert.tsx:156](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/Alert/Alert.tsx#L156)

___

### AlertContainer

▸ **AlertContainer**(`props`, `context?`): `ReactNode`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.children?` | `ReactNode` |
| `context?` | `any` |

#### Returns

`ReactNode`

#### Defined in

[src/component/Alert/AlertContainer.tsx:14](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/Alert/AlertContainer.tsx#L14)

___

### AlertItem

▸ **AlertItem**\<`AsTarget`, `ForwardedAsTarget`\>(`props`): `Element`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AsTarget` | extends `void` \| `WebTarget` = `void` |
| `ForwardedAsTarget` | extends `void` \| `WebTarget` = `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `PolymorphicComponentProps`\<``"web"``, `Substitute`\<`DetailedHTMLProps`\<`HTMLAttributes`\<`HTMLDivElement`\>, `HTMLDivElement`\>, \{ `$backgroundColor?`: `string` ; `$isExiting?`: `boolean` ; `level`: `undefined` \| ``"default"`` \| ``"primary"`` \| ``"secondary"`` \| ``"info"`` \| ``"success"`` \| ``"danger"`` \| ``"warning"`` ; `theme`: `DefaultTheme` \| `default`  }\>, `AsTarget`, `ForwardedAsTarget`, `AsTarget` extends `KnownTarget` ? `ComponentPropsWithRef`\<`AsTarget`\<`AsTarget`\>\> : {}, `ForwardedAsTarget` extends `KnownTarget` ? `ComponentPropsWithRef`\<`ForwardedAsTarget`\<`ForwardedAsTarget`\>\> : {}\> |

#### Returns

`Element`

#### Defined in

[src/component/Alert/Alert.tsx:141](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/Alert/Alert.tsx#L141)

▸ **AlertItem**(`props`): `ReactNode`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Substitute`\<`DetailedHTMLProps`\<`HTMLAttributes`\<`HTMLDivElement`\>, `HTMLDivElement`\>, \{ `$backgroundColor?`: `string` ; `$isExiting?`: `boolean` ; `level`: `undefined` \| ``"default"`` \| ``"primary"`` \| ``"secondary"`` \| ``"info"`` \| ``"success"`` \| ``"danger"`` \| ``"warning"`` ; `theme`: `DefaultTheme` \| `default`  }\> |

#### Returns

`ReactNode`

#### Defined in

[src/component/Alert/Alert.tsx:141](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/Alert/Alert.tsx#L141)

___

### AlertWrap

▸ **AlertWrap**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`AlertWrapProps`](interfaces/AlertWrapProps.md) |

#### Returns

`Element`

#### Defined in

[src/component/AlertWrap/AlertWrap.tsx:4](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/AlertWrap/AlertWrap.tsx#L4)

___

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

[src/component/alignBox/AlignBox.tsx:30](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/alignBox/AlignBox.tsx#L30)

___

### BetweenContainer

▸ **BetweenContainer**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `BetweenContainerProps` |

#### Returns

`Element`

#### Defined in

[src/component/BetweenContainer/BetweenContainer.tsx:31](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/BetweenContainer/BetweenContainer.tsx#L31)

___

### CustomTheme

▸ **CustomTheme**(`theme`): `default`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `default` |

#### Returns

`default`

#### Defined in

[src/component/StyleThemeProvider/CustomTheme.ts:4](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/StyleThemeProvider/CustomTheme.ts#L4)

___

### DarkAndLightModeButton

▸ **DarkAndLightModeButton**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `DarkAndLightModeButtonProps` |

#### Returns

`Element`

#### Defined in

[src/component/DarkAndLightModeButton/DarkAndLightModeButton.tsx:42](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/DarkAndLightModeButton/DarkAndLightModeButton.tsx#L42)

___

### GithubComment

▸ **GithubComment**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`GithubCommentProps`](interfaces/GithubCommentProps.md) |

#### Returns

`Element`

#### Defined in

[src/component/GithubComment/GithubComment.tsx:99](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/GithubComment/GithubComment.tsx#L99)

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

[src/component/githubProfile/GithubProfile.tsx:23](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/githubProfile/GithubProfile.tsx#L23)

___

### GithubReply

▸ **GithubReply**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`GithubReplyProps`](interfaces/GithubReplyProps.md) |

#### Returns

`Element`

#### Defined in

[src/component/GithubReply/GithubReply.tsx:52](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/GithubReply/GithubReply.tsx#L52)

___

### HeadText

▸ **HeadText**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `HeadTextProps` |

#### Returns

`Element`

#### Defined in

[src/component/utills/HeadText.tsx:20](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/utills/HeadText.tsx#L20)

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

[src/component/leftRightContainer/LeftRightContainer.tsx:42](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/leftRightContainer/LeftRightContainer.tsx#L42)

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

[src/component/link/Link.tsx:33](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/link/Link.tsx#L33)

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

[src/component/list/List.tsx:41](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/list/List.tsx#L41)

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

[src/component/list/List.item.tsx:28](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/list/List.item.tsx#L28)

___

### MacContainer

▸ **MacContainer**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`MacContainerProps`](interfaces/MacContainerProps.md) |

#### Returns

`Element`

#### Defined in

[src/component/macContainer/MacContainer.tsx:34](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/macContainer/MacContainer.tsx#L34)

___

### MacContainerHeader

▸ **MacContainerHeader**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `MacContainerHeaderProps` |

#### Returns

`Element`

#### Defined in

[src/component/macContainer/MacContainerHeader.tsx:44](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/macContainer/MacContainerHeader.tsx#L44)

___

### MacMenuBar

▸ **MacMenuBar**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `MacMenuBarProps` |

#### Returns

`Element`

#### Defined in

[src/component/MacMenuBar/MacMenuBar.tsx:29](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/MacMenuBar/MacMenuBar.tsx#L29)

___

### MacMenuBarItem

▸ **MacMenuBarItem**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `MacMenuBarItemProps` |

#### Returns

`Element`

#### Defined in

[src/component/MacMenuBar/MacMenuBarItem.tsx:69](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/MacMenuBar/MacMenuBarItem.tsx#L69)

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

[src/component/marginBox/MarginBox.tsx:28](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/marginBox/MarginBox.tsx#L28)

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

[src/component/profile/Profile.tsx:51](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/profile/Profile.tsx#L51)

___

### Screen

▸ **Screen**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `ScreenProps` |

#### Returns

`Element`

#### Defined in

[src/component/screen/Screen.tsx:35](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/screen/Screen.tsx#L35)

___

### SearchBar

▸ **SearchBar**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`SearchBarProps`](interfaces/SearchBarProps.md) |

#### Returns

`Element`

#### Defined in

[src/component/SearchBar/search-bar.tsx:62](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/SearchBar/search-bar.tsx#L62)

___

### SearchModal

▸ **SearchModal**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `SearchModalProps` |

#### Returns

`Element`

#### Defined in

[src/component/SearchModal/search-modal.tsx:12](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/SearchModal/search-modal.tsx#L12)

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

[src/component/spinner/Spinner.tsx:35](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/spinner/Spinner.tsx#L35)

___

### StyleThemeContextProvider

▸ **StyleThemeContextProvider**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `children` | `ReactNode` |

#### Returns

`Element`

#### Defined in

[src/component/StyleThemeProvider/StyleThemeContextProvider.tsx:5](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/StyleThemeProvider/StyleThemeContextProvider.tsx#L5)

___

### StyleThemeProvider

▸ **StyleThemeProvider**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `StyleThemeProviderProps` |

#### Returns

`Element`

#### Defined in

[src/component/StyleThemeProvider/StyleThemeProvider.tsx:6](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/StyleThemeProvider/StyleThemeProvider.tsx#L6)

___

### StyledAlert

▸ **StyledAlert**\<`AsTarget`, `ForwardedAsTarget`\>(`props`): `Element`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AsTarget` | extends `void` \| `WebTarget` = `void` |
| `ForwardedAsTarget` | extends `void` \| `WebTarget` = `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `PolymorphicComponentProps`\<``"web"``, `Substitute`\<`DetailedHTMLProps`\<`HTMLAttributes`\<`HTMLDivElement`\>, `HTMLDivElement`\>, `StyledAlertProps`\>, `AsTarget`, `ForwardedAsTarget`, `AsTarget` extends `KnownTarget` ? `ComponentPropsWithRef`\<`AsTarget`\<`AsTarget`\>\> : {}, `ForwardedAsTarget` extends `KnownTarget` ? `ComponentPropsWithRef`\<`ForwardedAsTarget`\<`ForwardedAsTarget`\>\> : {}\> |

#### Returns

`Element`

#### Defined in

[src/component/Alert/Alert.tsx:92](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/Alert/Alert.tsx#L92)

▸ **StyledAlert**(`props`): `ReactNode`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Substitute`\<`DetailedHTMLProps`\<`HTMLAttributes`\<`HTMLDivElement`\>, `HTMLDivElement`\>, `StyledAlertProps`\> |

#### Returns

`ReactNode`

#### Defined in

[src/component/Alert/Alert.tsx:92](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/Alert/Alert.tsx#L92)

___

### TextBox

▸ **TextBox**\<`AsTarget`, `ForwardedAsTarget`\>(`props`): `Element`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AsTarget` | extends `void` \| `WebTarget` = `void` |
| `ForwardedAsTarget` | extends `void` \| `WebTarget` = `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `PolymorphicComponentProps`\<``"web"``, `Substitute`\<`DetailedHTMLProps`\<`HTMLAttributes`\<`HTMLSpanElement`\>, `HTMLSpanElement`\>, `TextBoxWrapProps`\>, `AsTarget`, `ForwardedAsTarget`, `AsTarget` extends `KnownTarget` ? `ComponentPropsWithRef`\<`AsTarget`\<`AsTarget`\>\> : {}, `ForwardedAsTarget` extends `KnownTarget` ? `ComponentPropsWithRef`\<`ForwardedAsTarget`\<`ForwardedAsTarget`\>\> : {}\> |

#### Returns

`Element`

#### Defined in

[src/component/utills/TextBox.tsx:16](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/utills/TextBox.tsx#L16)

▸ **TextBox**(`props`): `ReactNode`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Substitute`\<`DetailedHTMLProps`\<`HTMLAttributes`\<`HTMLSpanElement`\>, `HTMLSpanElement`\>, `TextBoxWrapProps`\> |

#### Returns

`ReactNode`

#### Defined in

[src/component/utills/TextBox.tsx:16](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/utills/TextBox.tsx#L16)

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

[src/component/textOverFlow/TextOverFlow.tsx:20](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/textOverFlow/TextOverFlow.tsx#L20)

___

### TreeHeader

▸ **TreeHeader**\<`AsTarget`, `ForwardedAsTarget`\>(`props`): `Element`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AsTarget` | extends `void` \| `WebTarget` = `void` |
| `ForwardedAsTarget` | extends `void` \| `WebTarget` = `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `PolymorphicComponentProps`\<``"web"``, `FastOmit`\<`DetailedHTMLProps`\<`HTMLAttributes`\<`HTMLDivElement`\>, `HTMLDivElement`\>, `never`\>, `AsTarget`, `ForwardedAsTarget`, `AsTarget` extends `KnownTarget` ? `ComponentPropsWithRef`\<`AsTarget`\<`AsTarget`\>\> : {}, `ForwardedAsTarget` extends `KnownTarget` ? `ComponentPropsWithRef`\<`ForwardedAsTarget`\<`ForwardedAsTarget`\>\> : {}\> |

#### Returns

`Element`

#### Defined in

[src/component/TreeList/TreeList.tsx:15](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/TreeList/TreeList.tsx#L15)

▸ **TreeHeader**(`props`): `ReactNode`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `FastOmit`\<`DetailedHTMLProps`\<`HTMLAttributes`\<`HTMLDivElement`\>, `HTMLDivElement`\>, `never`\> |

#### Returns

`ReactNode`

#### Defined in

[src/component/TreeList/TreeList.tsx:15](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/TreeList/TreeList.tsx#L15)

___

### TreeItem

▸ **TreeItem**\<`AsTarget`, `ForwardedAsTarget`\>(`props`): `Element`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AsTarget` | extends `void` \| `WebTarget` = `void` |
| `ForwardedAsTarget` | extends `void` \| `WebTarget` = `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `PolymorphicComponentProps`\<``"web"``, `Substitute`\<`DetailedHTMLProps`\<`HTMLAttributes`\<`HTMLDivElement`\>, `HTMLDivElement`\>, [`TreeItemProps`](interfaces/TreeItemProps.md)\<\{ `[key: string]`: `any`;  }\>\>, `AsTarget`, `ForwardedAsTarget`, `AsTarget` extends `KnownTarget` ? `ComponentPropsWithRef`\<`AsTarget`\<`AsTarget`\>\> : {}, `ForwardedAsTarget` extends `KnownTarget` ? `ComponentPropsWithRef`\<`ForwardedAsTarget`\<`ForwardedAsTarget`\>\> : {}\> |

#### Returns

`Element`

#### Defined in

[src/component/TreeList/TreeList.tsx:27](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/TreeList/TreeList.tsx#L27)

▸ **TreeItem**(`props`): `ReactNode`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Substitute`\<`DetailedHTMLProps`\<`HTMLAttributes`\<`HTMLDivElement`\>, `HTMLDivElement`\>, [`TreeItemProps`](interfaces/TreeItemProps.md)\<\{ `[key: string]`: `any`;  }\>\> |

#### Returns

`ReactNode`

#### Defined in

[src/component/TreeList/TreeList.tsx:27](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/TreeList/TreeList.tsx#L27)

___

### TreeList

▸ **TreeList**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TreeListProps`](interfaces/TreeListProps.md)\<\{ `[key: string]`: `any`;  }\> |

#### Returns

`Element`

#### Defined in

[src/component/TreeList/TreeList.tsx:51](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/TreeList/TreeList.tsx#L51)

___

### useTheme

▸ **useTheme**(): `ThemeContextType`

#### Returns

`ThemeContextType`

#### Defined in

[src/component/StyleThemeProvider/useTheme.tsx:5](https://github.com/jun-young1993/react-style/blob/89c93868f379e277e13847fd9207195046ae251b/src/component/StyleThemeProvider/useTheme.tsx#L5)
