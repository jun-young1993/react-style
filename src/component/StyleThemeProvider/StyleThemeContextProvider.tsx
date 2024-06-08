import {createContext, ReactNode, useState} from "react";
import {ThemeContextType} from "./Theme.type";

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const StyleThemeContextProvider = ({children}: {children: ReactNode}) => {
    const [theme, setTheme] = useState<ThemeContextType['theme']>('light');

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}



export default StyleThemeContextProvider;

