export interface HTMLDivElementInterface extends React.HTMLAttributes<HTMLDivElement>{
    width?: string
    height?: string
    backgroundColor?: string
    zIndex?: string
    overflow?: 'scroll' | 'auto' | 'hidden' | 'visible' | 'unset'
    pointerEvents?: 'none' | 'auto' | string
    visibility: string | 'hidden' | 'visible'
    position?: string | 'absolute' | 'fixed'
    borderColor?: string;
    alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    top?: number | string;
    left?: number | string;
    right?: number | string;
    bottom?: number | string;
    boxSizing?: string
}