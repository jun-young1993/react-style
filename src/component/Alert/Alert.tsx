import React from 'react';
import styled, { DefaultTheme, css } from 'styled-components';
import { AlertProps } from './Alert.type';
import { AlertZIndex } from '../utills/ZIndexes';
import LightTheme from '../StyleThemeProvider/LightTheme';
import ThemeType from '../StyleThemeProvider/Theme.type';


const positionStyles  = {
  'top-right': css`
    top: 1rem;
    right: 1rem;
  `,
  'top-center': css`
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
  `,
  'top-left': css`
    top: 1rem;
    left: 1rem;
  `,
  'middle-left': css`
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
  `,
  'middle-center': css`
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  'middle-right': css`
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
  `,
  'bottom-left': css`
    bottom: 1rem;
    left: 1rem;
  `,
  'bottom-center': css`
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
  `,
  'bottom-right': css`
    bottom: 1rem;
    right: 1rem;
  `,
};

const AlertBackgrounColor = (value?: AlertProps['level'], theme?: ThemeType | DefaultTheme) => {

	switch(value){
		case 'primary':
			return theme?.preiwinkle ?? LightTheme.preiwinkle;
		case 'secondary':
			return theme?.ghostWhite ?? LightTheme.ghostWhite;
		case 'info':
			return theme?.skyBlue ?? LightTheme.skyBlue;
		case 'success':
			return theme?.mintGreen ?? LightTheme.mintGreen;
		case 'danger':
			return theme?.coralRed ?? LightTheme.coralRed;
		case 'warning':
			return theme?.salmon ?? LightTheme.salmon;
		default:
			return theme?.slateBlue ?? LightTheme.slateBlue;
	}	
}
const AlertColor = (value?: AlertProps['level'], theme?: ThemeType | DefaultTheme) => {
	switch(value){
		case 'default':
		case 'primary':
		case 'info':
		case 'success':
		case 'danger':			
		case 'warning':
		default:
			return theme?.white ?? LightTheme.white;
		case 'secondary':
			return theme?.black ?? LightTheme.black;
	}	
}

const StyledAlert = styled.div<{ position: AlertProps['position'], level:AlertProps['level'], theme: DefaultTheme | ThemeType }>`
  position: fixed;
  background-color: ${({level, theme}) => AlertBackgrounColor(level,theme)};
  color: ${({level, theme}) => AlertColor(level, theme)};
  padding: 1rem;
  border-radius: 0.25rem;
  z-index: ${AlertZIndex};
  ${({ position }) => positionStyles[position ?? 'top-right']}
`;

const Alert: React.FC<AlertProps> = ({ position, children, level, theme }) => {
  return (
    <StyledAlert position={position} level={level} theme={theme}>
      {children}
    </StyledAlert>
  );
};

export default Alert;
