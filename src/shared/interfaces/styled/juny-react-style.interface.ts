import {CustomTheme, StyledThemeInterface} from "../../theme";
import {DefaultTheme} from "styled-components";

export interface JunyReactStyleInterface {
    theme?: DefaultTheme | CustomTheme & StyledThemeInterface
}