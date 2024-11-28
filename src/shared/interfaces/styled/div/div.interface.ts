export interface HTMLDivElementInterface extends React.HTMLAttributes<HTMLDivElement>{
    width?: string
    height?: string
    backgroundColor?: string
    zIndex?: string
    overflow?: 'scroll' | 'auto' | 'hidden' | 'visible' | 'unset'
}