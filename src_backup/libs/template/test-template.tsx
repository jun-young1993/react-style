import { ThemeProvider } from "styled-components"

export const TestTemplate = ({children}: { children: JSX.Element | JSX.Element[]}) => {
	return <ThemeProvider theme={{}} >{children}</ThemeProvider>
}