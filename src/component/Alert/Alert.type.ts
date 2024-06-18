import { ThemeContextType } from "../StyleThemeProvider/Theme.type";
import { DefaultTheme } from "styled-components";

export interface AlertProps {
  position?: 'top-right' | 'top-center' | 'top-left' | 
             'middle-left' | 'middle-center' | 'middle-right' | 
             'bottom-left' | 'bottom-center' | 'bottom-right';
  children: React.ReactNode;
  theme?: DefaultTheme | ThemeContextType
  level?: 'default' | 'primary' | 'secondary' | 'info' | 'success' | 'danger' | 'warning'
}