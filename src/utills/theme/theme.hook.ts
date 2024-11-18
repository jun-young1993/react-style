import { useContext } from "react"
import { ThemeContext } from "styled-components"
import lightTheme from "./light-theme";

export const useDefaultTheme = () => {
    const theme = useContext(ThemeContext);
    return theme || lightTheme;
}

