import {createContext, useCallback, useState} from "react";
import {AddToast, Toast, ToastContextProps, ToastProviderProps} from "./toast.props";
import ToastMessage from "./toast-message";
import ToastContainer from "./toast-container";

export const ToastContext = createContext<ToastContextProps>({
    addToast: () => {
        console.warn("addToast called outside of ToastProvider.")
    }
})

export const ToastProvider = ({ children }: ToastProviderProps) => {
    const [ toasts, setToasts ] = useState<Toast[]>([])


    const addToast = useCallback<AddToast>((message, options) => {
        const defaultDuration = 3000
        const defaultFadeInSecond = 0.3
        const defaultFadeOutSecond = 0.5
        const {
            duration=defaultDuration,
            fadeInSecond=defaultFadeInSecond,
            fadeOutSecond=defaultFadeOutSecond
        } = options || {
            duration: 3000,

            fadeInSecond: defaultFadeInSecond,
            fadeOutSecond: defaultFadeOutSecond,
        }
        const id = Math.random().toString(36).substring(2,9)
        setToasts((prev) => [...prev, { id, message, duration, fadeInSecond, fadeOutSecond}])

        const timer = setTimeout(() => {
            setToasts((prev) => prev.filter((toast) => toast.id !== id));
            clearTimeout(timer)
        }, duration + (fadeOutSecond + 0.2 * 1000))

    },[])

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            <ToastContainer>
                {toasts.map(({id, duration, message, fadeInSecond, fadeOutSecond}, index) => {
                    return (
                        <ToastMessage
                          key={id}
                          duration={duration}
                          delay={index * 0.1}
                          fadeInSecond={fadeInSecond}
                          fadeOutSecond={fadeOutSecond}
                        >
                            {message}
                        </ToastMessage>
                    )
                })}
            </ToastContainer>
        </ToastContext.Provider>
    )
}