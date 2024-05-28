import { ReactNode } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import DarkTheme from "./DarkTheme";
import ThemeType from "./Theme.type";
import LightTheme from "./LightTheme";
interface StyleThemeProviderProps extends DefaultTheme{
	mode?: 'dark' | 'light'
	children: ReactNode
}
const StyleThemeProvider = ({mode, children}: StyleThemeProviderProps) => {

	const theme: ThemeType = (mode === 'dark' ? DarkTheme : LightTheme);
	

	return (
		<ThemeProvider
			theme={theme}
		>
			{children}
		</ThemeProvider>
	)
}
export default StyleThemeProvider; 