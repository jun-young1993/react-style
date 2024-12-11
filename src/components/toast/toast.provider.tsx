import {createContext, useCallback, useEffect, useState} from "react";
import {AddToast, Toast, ToastContextProps, ToastProviderProps} from "./toast.props";
import ToastMessage from "./toast-message";
import ToastContainer from "./toast-container";
import {DetailedPosition} from "../../shared";
import { CycleCloseIconButton } from "../../components/styled-icon-button";
import styled from "styled-components";

export const ToastContext = createContext<ToastContextProps>({
    addToast: () => {
        console.warn("addToast called outside of ToastProvider.")
    }
})
const ToastMessageWrap = styled.div`
    padding: 5px;
    background-color: transparent;
    position: relative;
`
const ToastProvider = ({ children }: ToastProviderProps) => {
    const [ toasts, setToasts ] = useState<Toast[]>([])
    const [ positionToasts, setPositionToasts] = useState<DetailedPosition[]>([])
    
    const addToast = useCallback<AddToast>((message, options) => {
        const defaultDuration = 3000
        const defaultFadeInSecond = 0.3
        const defaultFadeOutSecond = 0.5
        const defaultPosition: DetailedPosition = 'bottom-left'
        const {
            duration=defaultDuration,
            fadeInSecond=defaultFadeInSecond,
            fadeOutSecond=defaultFadeOutSecond,
            position=defaultPosition
        } = options || {
            duration: defaultDuration,
            fadeInSecond: defaultFadeInSecond,
            fadeOutSecond: defaultFadeOutSecond,
            position: defaultPosition
        }
        const id = Math.random().toString(36).substring(2,9)
        setToasts(
      (prev) => [
                ...prev,
                { id, message, duration, fadeInSecond, fadeOutSecond, position}
            ]
        )
        const timer = setTimeout(() => {
            setToasts((prev) => prev.filter((toast) => toast.id !== id));
            clearTimeout(timer)
        }, duration + (parseInt(String(fadeOutSecond))  * 1000))
    },[])

    const handleCloseClick = (id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }

    useEffect(() => {
        const positions: DetailedPosition[] = []
        toasts.forEach((toast) => {
            if(!positions.includes(toast.position)){
                positions.push(toast.position)
            }
        })
        setPositionToasts([...positions])
    },[toasts])


    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            {positionToasts.map((positionToast) => {
                return (
                    <ToastContainer
                        key={positionToast}
                        $position={positionToast}
                        $pointerEvents="none"
                    >
                        {toasts.filter(({position}) => position === positionToast)
                            .map(({
                                      id,
                                      duration,
                                      message,
                                      fadeInSecond,
                                      fadeOutSecond,
                                      position
                              }, index) => {
                            return (
                                <ToastMessageWrap>
                                    <ToastMessage
                                        key={id}
                                        id={id}
                                        duration={duration}
                                        message={message}
                                        delay={index * 0.1}
                                        fadeInSecond={fadeInSecond}
                                        fadeOutSecond={fadeOutSecond}
                                        position={position}
                                    >
                                        {message}
                                    </ToastMessage>
                                    <CycleCloseIconButton
                                        $position="absolute"
                                        $top={0}
                                        $right={0}
                                        color="white"
                                        $width="14px"
                                        $height="14px"
                                        $pointerEvents="auto"
                                        onClick={() => handleCloseClick(id)}
                                    />
                                </ToastMessageWrap>
                            )
                        })}
                    </ToastContainer>
                )
            })}
        </ToastContext.Provider>
    )
}

export default ToastProvider