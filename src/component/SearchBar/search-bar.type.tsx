import React, {KeyboardEventHandler, ReactNode} from "react";

export interface SearchBarProps {
    placeholder?: string | ReactNode
    onSearch?: (query: string) => void | string
    $backgroundColor?: string | undefined
    $boxShadow?: string | undefined
    $inputHoverBoxShadow?: string | undefined
    $inputFocusBoxShadow?: string | undefined
    $onClick?: () => void
    $onKeyUp?: (e: React.KeyboardEvent<HTMLDivElement>) => void
    BoxShadow?: string | undefined
    $cursor?: string | undefined
    $as?: 'input' | 'div'
    $hiddenIcon?: boolean
}

export interface InputElement extends React.InputHTMLAttributes<HTMLInputElement> {

}
export interface SearchBarInputElement extends InputElement {

}