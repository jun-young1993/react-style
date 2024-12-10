import React, { forwardRef, useEffect, useState } from 'react';
import { FlexContainer } from '../../components/flex-container';
import {DetailedPosition, HTMLDivElementInterface, HTMLFlexInterface} from "../../shared";
import {ToastContainerProps} from "./toast.props";

const ToastContainer = forwardRef<HTMLDivElement,ToastContainerProps>(
    ({ children, $position, $pointerEvents = 'auto', ...props }, ref) => {

        
        const getFlexDirection = (position: DetailedPosition): HTMLFlexInterface['flexDirection'] => {
            switch(position){
                case "top-left":
                case "top-middle":
                case "top-right":
                    return 'column'
                default:
                    return 'column-reverse'
            }
        }

        const getLeft = (position: DetailedPosition): string|number => {
            switch(position){
                case "top-right":
                case "bottom-right":
                    return '100%'
                case "top-middle":
                case "bottom-middle":
                    return '50%'
                default:
                    return 0
            }
        }

        const getTransform = (position: DetailedPosition): string => {
            switch(position){
                case "top-right":
                case "bottom-right":
                    return "translateX(-100%)"
                case "top-middle":
                case "bottom-middle":
                    return "translateX(-50%)"
                default:
                    return "translateX(0%)"
            }
        }



        // useEffect(() => {
        //     const handleWheel = () => {
        //         console.log('start whell')
        //         if(pointerEvents === "none"){
        //             setPointerEvents("auto");
        //             const timer = setTimeout(() => {
        //               setPointerEvents("none");
        //               clearTimeout(timer)
        //             }, 1000); // 1초 후 다시 pointer-events를 none으로
        //         }   
        //       };
        //     const container = ref && typeof ref === "object" && ref.current;
        //     if (container) {
        //       container.addEventListener("wheel", handleWheel);
        //     }
        //     return () => {
        //       if (container) {
        //         container.removeEventListener("wheel", handleWheel);
        //       }
        //     };
        // }, [pointerEvents, ref] )
        
        return (
            <FlexContainer
                {...props}
                ref={ref}
                $overflowY='hidden'
                $width={'auto'}
                $position='fixed'
                $margin={'1rem'}
                $gap={'0.5rem'}
                $top={0}
                $left={getLeft($position)}
                $transform={getTransform($position)}
                $backgroundColor={'transparent'}
                $flexDirection={getFlexDirection($position)}
                $pointerEvents={$pointerEvents}
            >
                {children}
            </FlexContainer>
        );
    }
);

export default ToastContainer;
