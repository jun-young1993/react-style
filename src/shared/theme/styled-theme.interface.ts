import { DropDownContainerInterface } from "../../components/field/drop-down/drop-down-field.interface";

export type Variant = "primary" | "secondary" | "tertiary";
export type Size = "xs" | "small" | "medium" | "large";
export type ButtonSize = Size;
export type StyledThemeType = Variant | string;
export type ButtonStyledThemeType = StyledThemeType;

export interface dropDownStyledTheme {
  size: Record<Size, DropDownContainerInterface>
}
export interface StyledThemeInterface {
    buttonDefault: StyledThemeType;
    button: Record<StyledThemeType, {
      backgroundColor?: string;
      color?: string;
      border?: string | 'none'
      hoverBackgroundColor?: string;
      hoverBorderColor?: string; // 일부 타입에는 없으므로 optional로 처리합니다.
      disabledBackgroundColor?: string; // 일부 타입에는 없으므로 optional로 처리합니다.
      disabledBorderColor?: string; // 일부 타입에는 없으므로 optional로 처리합니다.
      disabledColor?: string; // 일부 타입에는 없으므로 optional로 처리합니다.
        hoverColor?: string
    }>;
    buttonSizeDefault: Size;
    buttonSize: Record<Size, {
      padding?: string;
      fontSize?: string;
      width?: string;
      height?: string;
    }>;
    itemDefault: StyledThemeType;
    item: Record<StyledThemeType, {
      backgroundColor?: string;
      color?: string;
      borderColor?: string; // 일부 타입에는 없으므로 optional로 처리합니다.
      hoverBackgroundColor?: string;
      hoverBorderColor?: string; // 일부 타입에는 없으므로 optional로 처리합니다.
      disabledBackgroundColor?: string; // 일부 타입에는 없으므로 optional로 처리합니다.
      disabledBorderColor?: string; // 일부 타입에는 없으므로 optional로 처리합니다.
      disabledColor?: string; // 일부 타입에는 없으므로 optional로 처리합니다.
    }>;
    tableDefault: StyledThemeType,
    table: Record<StyledThemeType, {
      wrap: {
        borderColor?: string
      },
      cell: {
        borderColor?: string
      },
      head: {
        backgroundColor?: string
      },
      row: {
        hoverBackgroundColor?: string
      }
    }>,
    fieldDefault: StyledThemeType,
    field:  Record<StyledThemeType, {
      dropDown: dropDownStyledTheme
    }>
  }