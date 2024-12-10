import React from 'react';
import { FlexContainer } from '../../components/flex-container';
import {DetailedPosition, HTMLFlexInterface} from "../../shared";
import {ToastContainerProps} from "./toast.props";

const ToastContainer = ({ children, $position }: ToastContainerProps) => {
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


  return (
      <FlexContainer
        $width={'auto'}
        $position='fixed'
        $margin={'1rem'}
        $gap={'0.5rem'}
        $top={0}
        $left={getLeft($position)}
        $transform={getTransform($position)}
        $backgroundColor={'transparent'}
        $flexDirection={getFlexDirection($position)}
        $pointerEvents='none'
      >
          {children}
      </FlexContainer>
  );
};

export default ToastContainer;
