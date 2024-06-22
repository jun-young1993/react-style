import React from 'react';
import styled from 'styled-components';

const AlertContainerStyled = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 10px; /* 간격 설정 */
  z-index: 1000; /* 적절한 z-index 설정 */
`;

const AlertContainer: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <AlertContainerStyled>{children}</AlertContainerStyled>;
};

export default AlertContainer;
