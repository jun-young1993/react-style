import {ComponentProps, DetailedHTMLProps} from "react";

export interface AlignBoxProps extends ComponentProps<'div'>{
    align?: 'left' | 'center' | 'right'
    
}