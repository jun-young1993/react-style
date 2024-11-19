
import defaultStyledTheme from "./styled-theme";
import { StyledTheme } from "./styled-theme.interface";
import { CustomTheme } from "./theme.interface";

const lightTheme: CustomTheme & StyledTheme = {
    ...defaultStyledTheme,
    white: '#ffffff',
    black: '#000000',
    lightGray: '#f0f0f0',
    darkGray: "#333333",
    midLightGray: '#e8e8e8',
    lightPink: "#ffe4e1",
    beige: "#f5f5dc",
    lightBlue: "#f7fbff",
};
  
export default lightTheme;