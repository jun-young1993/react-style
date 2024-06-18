import {DefaultTheme} from "styled-components";
import {ReactNode} from "react";

export default interface ThemeType {
	mode?: 'light' | 'dark'
	white: string
	black: string
	lightGray: string
	softGray: string
	lightBlueGray: string
	lightGrayBlue: string
	veryLightGray: string
	paleGray: string
	snowWhite: string
	mediumGray: string
	darkGray: string
	darkCharcoal: string
	brightWhite: string
	slateBlue: string
	preiwinkle: string
	ghostWhite: string
	skyBlue: string
	mintGreen: string
	coralRed: string
	salmon: string
}

export interface StyleThemeProviderProps extends DefaultTheme{
	mode?: 'dark' | 'light'
	children: ReactNode
}

export interface ThemeContextType {
	theme: StyleThemeProviderProps['mode'];
	setTheme: (theme: StyleThemeProviderProps['mode']) => void;
}