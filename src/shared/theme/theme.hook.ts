import {ThemeContext} from "styled-components"
import lightTheme from "./light-theme";
import {StyledThemeInterface} from "./styled-theme.interface";
import { CustomTheme } from "./theme.interface";
import {useContext} from "react";

export const useStyledTheme = (): CustomTheme & StyledThemeInterface => {
    const theme = useContext(ThemeContext);

    const result = theme || lightTheme;
    if(isCustomStyledTheme(result)){
        return result;
    }
    console.warn("Theme is not of the expected type. Falling back to lightTheme.");
    return lightTheme;
}

function isCustomStyledTheme(theme: any): theme is CustomTheme & StyledThemeInterface {
    return theme 
        && typeof theme === 'object' 
        && 'button' in theme 
        && 'buttonSize' in theme;
}