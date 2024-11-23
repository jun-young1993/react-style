import {ThemeProvider} from "styled-components";
import {ThemeProviderInterface} from "./theme.interface";
import LightTheme from "./light-theme";

const StyledThemeProvider = ({children, theme}: ThemeProviderInterface) => {
    return (
        <ThemeProvider theme={theme || LightTheme}>{children}</ThemeProvider>
    )
}
export default StyledThemeProvider