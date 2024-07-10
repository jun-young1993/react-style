import { CursorType } from "../index.types";
import { ThemeContextType } from "../StyleThemeProvider/Theme.type";
import { DefaultTheme } from "styled-components";

export interface AlertProps {
  position?: 'top-right' | 'top-center' | 'top-left' | 
             'middle-left' | 'middle-center' | 'middle-right' | 
             'bottom-left' | 'bottom-center' | 'bottom-right';
  children?: React.ReactNode | React.ReactNode[] | undefined | string;
  theme?: DefaultTheme | ThemeContextType
  level?: 'default' | 'primary' | 'secondary' | 'info' | 'success' | 'danger' | 'warning'
  index?: number;
  gap?: string;
  closeButtonSize?: string
  $backgroundColor?: string
  onClose?: (item: React.ReactNode) => void
  $animation?: boolean
}

export interface StyledAlertProps {
  position: AlertProps['position'], 
  index?: number,
  gap?: string,
  $columnGap?: string
  $opacity?: string
  $maxWidth?: string
  $maxHeight?: string
  $active?: boolean
  $cursor?: CursorType
  $animation?: boolean
}