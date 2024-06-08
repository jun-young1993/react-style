import { ThemeProvider } from "styled-components";
import DarkTheme from "./DarkTheme";
import ThemeType, {StyleThemeProviderProps} from "./Theme.type";
import LightTheme from "./LightTheme";

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