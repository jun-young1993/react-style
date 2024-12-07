import React from 'react';
import { FlexContainer } from '../../components/flex-container';
import {ToastProps} from "./toast.props";



const ToastContainer = ({ children }: ToastProps) => {
  return (
      <FlexContainer
        $width={'auto'}
        $position='fixed'
        $margin={'1rem'}
        $gap={'0.5rem'}
        $top={0}
        $left={0}
        $backgroundColor={'unset'}
        $flexDirection={"column-reverse"}
        $pointerEvents='none'
      >
          {children}
      </FlexContainer>
  );
};

export default ToastContainer;
