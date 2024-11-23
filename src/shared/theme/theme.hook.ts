import { useContext } from "react"
import { ThemeContext } from "styled-components"
import lightTheme from "./light-theme";
import { StyledTheme } from "./styled-theme.interface";
import { CustomTheme } from "./theme.interface";

export const useStyledTheme = (theme: CustomTheme & StyledTheme): CustomTheme & StyledTheme => {
    // const theme = useContext(ThemeContext);
    
    const result = theme || lightTheme;
    if(isCustomStyledTheme(result)){
        return result;
    }
    console.warn("Theme is not of the expected type. Falling back to lightTheme.");
    return lightTheme;
}

function isCustomStyledTheme(theme: any): theme is CustomTheme & StyledTheme {
    return theme 
        && typeof theme === 'object' 
        && 'button' in theme 
        && 'buttonSize' in theme;
}