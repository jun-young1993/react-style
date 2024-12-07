import {ReactNode} from "react";

export interface ToastProps {
    $messages: string[]
    $duration: number
    children: ReactNode
}
interface ToastOptions {
    duration?: number
    fadeInSecond?: string | number
    fadeOutSecond?: string | number
}
export type AddToast = (message: string, options?: ToastOptions) => void
export interface ToastContextProps {
    addToast: AddToast
}

export interface ToastProviderProps {
    children: ReactNode
}

export interface Toast {
    id: string
    message: string
    duration: number
    fadeInSecond: string | number
    fadeOutSecond: string | number
}

export interface ToastMessageProps {

}