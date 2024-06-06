export interface DarkAndLightModeButtonProps {
    iconSize?: string
    onClick?: (mode: string | 'dark' | 'light') => void
    initMode?: boolean
}