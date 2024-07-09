import { SearchBarProps} from "../SearchBar";

import ThemeType from "../StyleThemeProvider/Theme.type";

export interface SearchModalProps {
    $onClick?: SearchBarProps['$onClick']
    theme?: ThemeType
}