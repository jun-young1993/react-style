import { StyledThemeInterface } from "./styled-theme.interface";
import { CustomTheme } from "./theme.interface";
import styledTheme from "./styled-theme";

const lightTheme: CustomTheme & StyledThemeInterface = {
    ...styledTheme,
    white: '#ffffff',
    black: '#000000',
    lightGray: '#f0f0f0',
    darkGray: "#333333",
    midLightGray: '#e8e8e8',
    lightPink: "#ffe4e1",
    beige: "#f5f5dc",
    lightBlue: "#f7fbff",
    primaryGray: '#646464'
};
  
export default lightTheme;