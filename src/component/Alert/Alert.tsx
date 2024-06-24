import React, {Children, useEffect, useRef, useState} from 'react';
import styled, {DefaultTheme, css, keyframes} from 'styled-components';
import { AlertProps, StyledAlertProps } from './Alert.type';
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

export const StyledAlert = styled.div<StyledAlertProps>`
  position: fixed;
  z-index: ${AlertZIndex};
  ${({ position, index, gap }) => positionStyles[position ?? 'top-right'](index,gap)}
  max-width: ${({$maxWidth}) => $maxWidth ?? '80%'};
  max-height: ${({$maxHeight}) => $maxHeight ?? '80%'};
  overflow: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  opacity: ${({$opacity}) => $opacity ?? '100%'};
  gap: ${({$columnGap}) => $columnGap ?? '10px'}; /* 간격 설정 */

  transition: opacity 0.5s ease, transform 0.5s ease;
  
  &:hover {
    opacity: 100%;
    transform: scale(1.05);
  }
  &.active {
    opacity: 100%;
    transform: scale(1.05);
  }
`;
const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;
export const AlertItem = styled.div<{ 
  level:AlertProps['level'], 
  theme: DefaultTheme | ThemeType,
    $isExiting?: boolean
}>`
  background-color: ${({level, theme}) => AlertBackgrounColor(level,theme)};
  color: ${({level, theme}) => AlertColor(level, theme)};
  padding: 1rem;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  animation: ${({ $isExiting }) => ($isExiting ? slideOut : slideIn)} 0.5s ease-out; // 애니메이션 적용
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
  const [visibleItems, setVisibleItems] = useState(Children.toArray(children));
    const [exitingItems, setExitingItems] = useState<React.ReactNode[]>([]);
    const timers = useRef<NodeJS.Timeout[]>([]);
    useEffect(() => {
        return () => {
            // 컴포넌트 언마운트 시 타이머 정리
            timers.current.forEach(clearTimeout);
        };
    }, []);

const handleRemove = (child: React.ReactNode) => {
    setExitingItems((prev) => [...prev, child]);

    const timer = setTimeout(() => {
        setVisibleItems([...visibleItems.filter((item) => item !== child)])
        onClose && onClose(child);
    },500);
    timers.current.push(timer);



};
  return (
    <StyledAlert
      position={position}
      theme={theme}
      index={index}
      gap={gap}
    >
      {visibleItems.map((children) => {
        return <AlertItem
        level={level}
        theme={theme}
        $isExiting={exitingItems.includes(children)}
        >
          <RoundButton
            style={{
              left:"1rem",
            }}
            size={closeButtonSize}
            color={"red"}
            onClick={() => handleRemove(children)}
            >
            <CloseIcon viewBox={"0 0 14 14"}/>
          </RoundButton>
          <MarginBox
            top='10px'
            left='10px'
          >
            {children}
          </MarginBox>
        </AlertItem>
      })}

    </StyledAlert>
  );
};

export default Alert;
