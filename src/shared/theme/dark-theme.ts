import defaultStyledTheme from "./styled-theme";
import { StyledTheme } from "./styled-theme.interface";
import { CustomTheme } from "./theme.interface";

const darkTheme: CustomTheme & StyledTheme= {
    ...defaultStyledTheme,
    white: '#000000',
    black: '#ffffff',
    lightGray: "#333333",
    darkGray: '#f0f0f0',
    midLightGray: '#3a3a3a',
    lightPink: '#5c3f41',
    beige: '#4a4735',
    lightBlue: '#3e4c5b',
};
  
export default darkTheme;