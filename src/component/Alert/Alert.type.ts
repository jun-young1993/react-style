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
  onClose?: (item: React.ReactNode) => void
}

export interface StyledAlertProps {
  position: AlertProps['position'], 
  index: number,
  gap: string,
  $columnGap?: string
  $opacity?: string
  $maxWidth?: string
  $maxHeight?: string
}