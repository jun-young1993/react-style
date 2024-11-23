import { DefaultTheme } from "styled-components";
import {ReactNode} from "react";
import {StyledTheme} from "./styled-theme.interface";

export interface CustomTheme extends DefaultTheme {
    white: string;
    black: string;
    lightGray: string;
    darkGray: string;
    midLightGray: string;
    lightPink: string;
    beige: string;
    lightBlue: string;
}

export interface ThemeProviderInterface {
    children: ReactNode,
    theme?: CustomTheme & StyledTheme
}
