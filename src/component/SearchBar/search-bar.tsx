import React, { ChangeEvent, KeyboardEventHandler } from 'react';
import styled, {css} from 'styled-components';

import {SearchBarInputElement, SearchBarProps} from "./search-bar.type";
import {SearchIcon} from "react-symbol";
import {LightTheme} from "../StyleThemeProvider";
import {StyledAlert} from "../Alert";

// 스타일 컴포넌트 정의
const SearchBarWrapper = styled.div<SearchBarProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: ${({theme, $backgroundColor}) => $backgroundColor ?? (theme.softGray ?? LightTheme.softGray)};
  border-radius: 5px;
  box-shadow: ${({$boxShadow}) => $boxShadow ?? `0 2px 4px rgba(0, 0, 0, 0.1)`};

`;
const InputStyle = css<SearchBarProps>`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  background-color: ${({theme}) => theme.white ?? LightTheme.white};
  cursor: ${({$cursor = 'none'}) => $cursor};
  &:hover {
    box-shadow: ${({$inputHoverBoxShadow = "none"}) => $inputHoverBoxShadow};
  }
  &:focus {
    box-shadow: ${({$inputFocusBoxShadow = "0 0 5px rgba(0, 123, 255, 0.5)"}) => $inputFocusBoxShadow};
    cursor: ${({$cursor = 'none'}) => $cursor};
  }
`
const Input = styled.input<SearchBarProps>`
    ${InputStyle}
`;
const InputDiv = styled.div<SearchBarProps>`
    width: 100%;
    ${InputStyle}
`

const SearchIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  color: ${({theme}) => theme.black ?? LightTheme.black};
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

// SearchBar 컴포넌트 정의
const SearchBar = ({ placeholder,
                       onSearch,
                       $backgroundColor,
                       $boxShadow,
                       $cursor,
    $inputFocusBoxShadow,
    $inputHoverBoxShadow,
    $onClick,
    $onKeyUp,
    $as,
    $hiddenIcon
}: SearchBarProps) => {
    const [query, setQuery] = React.useState<string>('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleSearchClick = () => {
        if (onSearch) {
            onSearch(query);
        }
    };

    return (
        <SearchBarWrapper

            $backgroundColor={$backgroundColor}
            $boxShadow={$boxShadow}
            $cursor={$cursor}
        >
            {$as === 'div'
            ? <InputDiv
                    onClick={() => {
                        $onClick && $onClick();
                    }}
                    onKeyUp={(e: React.KeyboardEvent<HTMLDivElement>)=>{
                        $onKeyUp && $onKeyUp(e,query);
                    }}
                    $cursor={$cursor}
                    $inputFocusBoxShadow={$inputFocusBoxShadow}
                    $inputHoverBoxShadow={$inputHoverBoxShadow}
                    onChange={handleInputChange}
                >
                    {placeholder || "Search..."}
                </InputDiv>
            :<Input
                    onClick={() => {
                        $onClick && $onClick();
                    }}
                    type="text"
                    onKeyUp={(e: React.KeyboardEvent<HTMLDivElement>)=>{
                        $onKeyUp && $onKeyUp(e);
                    }}
                    placeholder={placeholder || "Search..."}
                    value={query}
                    $cursor={$cursor}
                    $inputFocusBoxShadow={$inputFocusBoxShadow}
                    $inputHoverBoxShadow={$inputHoverBoxShadow}
                    onChange={handleInputChange}

                />}
            {!$hiddenIcon &&
                <SearchIconWrapper
                    onClick={handleSearchClick}>
                    <SearchIcon
                        width={"14px"}
                        height={"14px"}
                        viewBox={"0 0 12 12"}
                    />
                </SearchIconWrapper>
            }

        </SearchBarWrapper>
    );
};

export default SearchBar;
