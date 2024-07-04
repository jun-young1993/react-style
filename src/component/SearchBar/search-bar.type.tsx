export interface SearchBarProps {
    placeholder?: string
    onSearch?: (query: string) => void | string
    $backgroundColor?: string | undefined
    $boxShadow?: string | undefined
}