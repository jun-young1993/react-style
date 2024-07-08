import React from "react";

export interface SearchBarProps {
    placeholder?: string
    onSearch?: (query: string) => void | string
    $backgroundColor?: string | undefined
    $boxShadow?: string | undefined
    $inputHoverBoxShadow?: string | undefined
    $inputFocusBoxShadow?: string | undefined
    $onClick?: () => void
    BoxShadow?: string | undefined
    $cursor?: string | undefined
}

export interface InputElement extends React.InputHTMLAttributes<HTMLInputElement> {

}
export interface SearchBarInputElement extends InputElement {

}