import {SearchModalProps} from "./search-modal.type";
import {SearchBar} from "../SearchBar";
import styled from "styled-components";
import {LightTheme} from "../StyleThemeProvider";
import {SearchIcon} from "react-symbol";
import React from "react";
const SearchPlaceHolder = styled.span`
  margin-left: 1rem;
  margin-right: 1rem;
  color: ${({theme=LightTheme}) => theme.slateBlue};
`
const SearchModal = ({$onClick, theme = LightTheme}:SearchModalProps) => {
    return <SearchBar
                $inputHoverBoxShadow={"0 0 5px rgba(0, 123, 155, 0.5)"}
                $boxShadow={'none'}
                placeholder={<div>
                    <SearchIcon
                        color={theme.slateBlue}
                        width={"14px"}
                        height={"14px"}
                        viewBox={"0 0 12 12"}
                    />
                    <SearchPlaceHolder>
                       Search ...
                    </SearchPlaceHolder>
                </div>}
                $backgroundColor={"rgba(0, 0, 0, 0.0)"}
                $cursor={"pointer"}
                $onClick={$onClick}
                $as={"div"}
                $hiddenIcon={true}
            />

}
export default SearchModal;