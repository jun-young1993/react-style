import React, { Children } from 'react';
import styled, { DefaultTheme, css } from 'styled-components';
import { AlertProps } from './Alert.type';
import { AlertZIndex } from '../utills/ZIndexes';
import LightTheme from '../StyleThemeProvider/LightTheme';
import ThemeType from '../StyleThemeProvider/Theme.type';
import RoundButton from '../utills/RoundButton';
import { CloseIcon } from 'react-symbol';
import { MarginBox } from '../marginBox';



const positionStyles = {
  'top-right': (index: number, gap: string) => css`
    top: calc(1rem + ${index} * ${gap});
    right: 1rem;
  `,
  'top-center': (index: number, gap: string) => css`
    top: calc(1rem + ${index} * ${gap});
    left: 50%;
    transform: translateX(-50%);
  `,
  'top-left': (index: number, gap: string) => css`
    top: calc(1rem + ${index} * ${gap});
    left: 1rem;
  `,
  'middle-left': (index: number, gap: string) => css`
    top: calc(50% + ${index} * ${gap});
    left: 1rem;
    transform: translateY(-50%);
  `,
  'middle-center': (index: number, gap: string) => css`
    top: calc(50% + ${index} * ${gap});
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  'middle-right': (index: number, gap: string) => css`
    top: calc(50% + ${index} * ${gap});
    right: 1rem;
    transform: translateY(-50%);
  `,
  'bottom-left': (index: number, gap: string) => css`
    bottom: calc(1rem + ${index} * ${gap});
    left: 1rem;
  `,
  'bottom-center': (index: number, gap: string) => css`
    bottom: calc(1rem + ${index} * ${gap});
    left: 50%;
    transform: translateX(-50%);
  `,
  'bottom-right': (index: number, gap: string) => css`
    bottom: calc(1rem + ${index} * ${gap});
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

const StyledAlert = styled.div<{ 
  position: AlertProps['position'], 
  index: number,
  gap: string
}>`
  position: fixed;
  z-index: ${AlertZIndex};
  ${({ position, index, gap }) => positionStyles[position ?? 'top-right'](index,gap)}
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px; /* 간격 설정 */
`;

const ALertItem = styled.div<{ 
  level:AlertProps['level'], 
  theme: DefaultTheme | ThemeType,
}>`
  background-color: ${({level, theme}) => AlertBackgrounColor(level,theme)};
  color: ${({level, theme}) => AlertColor(level, theme)};
  padding: 1rem;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
`;

const Alert: React.FC<AlertProps> = ({ 
  position = 'top-right', 
  children, 
  level, 
  theme, 
  index=1, 
  gap='3.5rem' ,
  closeButtonSize,
  onClose
}) => {
  const childrens = Children.toArray(children);
  return (
    <StyledAlert 
      position={position} 
      theme={theme} 
      index={index} 
      gap={gap}
    >
      {childrens.map((children) => {
        return <ALertItem
        level={level} 
        theme={theme} 
        >
          <RoundButton
            style={{
              left:"1rem",
            }}
            size={closeButtonSize}
						color={"red"}
						onClick={() => onClose && onClose()}
						>
							<CloseIcon viewBox={"0 0 14 14"}/>
          </RoundButton>
          <MarginBox
            top='10px'
            left='10px'
          >
            {children}
          </MarginBox>
        </ALertItem>
      })}
      
    </StyledAlert>
  );
};

export default Alert;
