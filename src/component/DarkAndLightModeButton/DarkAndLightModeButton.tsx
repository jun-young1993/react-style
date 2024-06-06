import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { SunIcon, MoonIcon } from 'react-symbol';
import {DarkAndLightModeButtonProps} from "./DarkAndLightModeButton.type";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s ease;
  outline: none;
  justify-content: center;
  align-items: center;
  &:hover {
    transform: scale(1.1);
  }

  &.rotate {
    animation: ${rotate} 0.5s forwards;
  }
`;



const DarkAndLightModeButton = ({iconSize, onClick, initMode}:DarkAndLightModeButtonProps) => {
    const [isDarkMode, setIsDarkMode] = useState(initMode ? initMode : false);
    const [isRotating, setIsRotating] = useState(false);

    const handleClick = () => {
        setIsRotating(true);
        setTimeout(() => {
            setIsDarkMode(!isDarkMode);
            setIsRotating(false);
            onClick && onClick(isDarkMode ? 'dark' : 'light');
        }, 250); // 회전 애니메이션의 절반 시간 후 상태 변경
    };

    const size = iconSize ?iconSize.toString(): "30";


    return (
            <Button onClick={handleClick} className={isRotating ? 'rotate' : ''}>
                {isDarkMode
                    ? <MoonIcon
                        width={size} height={size} viewBox={"0 0 14 14"}
                    />
                    : <SunIcon
                        width={size} height={size} viewBox={"0 0 14 14"}
                    />}
            </Button>
    );
};

export default DarkAndLightModeButton;
