import {ReactNode} from "react";
import {DetailedPosition, HTMLDivElementInterface} from "../../shared";

export interface ToastContainerProps {
    $position: DetailedPosition
    $pointerEvents: HTMLDivElementInterface['pointerEvents']
    children: ReactNode
}
export interface ToastProps extends ToastContainerProps{
    $messages: string[]
    $duration: number
    children: ReactNode
    $position: DetailedPosition
}
interface ToastOptions {
    duration?: number
    fadeInSecond?: string | number
    fadeOutSecond?: string | number
    position?: DetailedPosition
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
    duration: number
    message: string
    fadeInSecond: string | number
    fadeOutSecond: string | number
    position: DetailedPosition
}

export interface ToastMessageProps {

}