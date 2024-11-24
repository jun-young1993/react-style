export type Variant = "primary" | "secondary" | "tertiary";
export type Size = "xs" | "small" | "medium" | "large";
export type ButtonSize = Size;
export type ButtonStyledThemeType = Variant | string;
export interface StyledThemeInterface {
    buttonDefault: ButtonStyledThemeType;
    button: Record<ButtonStyledThemeType, {
      backgroundColor: string;
      color: string;
      borderColor: string; // 일부 타입에는 없으므로 optional로 처리합니다.
      hoverBackgroundColor: string;
      hoverBorderColor: string; // 일부 타입에는 없으므로 optional로 처리합니다.
      disabledBackgroundColor: string; // 일부 타입에는 없으므로 optional로 처리합니다.
      disabledBorderColor?: string; // 일부 타입에는 없으므로 optional로 처리합니다.
      disabledColor: string; // 일부 타입에는 없으므로 optional로 처리합니다.
    }>;
    buttonSizeDefault: Size;
    buttonSize: Record<Size, {
      padding: string;
      fontSize: string;
      width: string;
      height: string;
    }>;
  }