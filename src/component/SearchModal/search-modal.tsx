import {SearchModalProps} from "./search-modal.type";
import {SearchBar} from "../SearchBar";
import styled from "styled-components";
import {LightTheme} from "../StyleThemeProvider";
const SearchModalWrap = styled.div`
    border-radius: 0.3rem;
    border: 1px solid ${({theme}) => theme.silverGray ?? LightTheme.silverGray};
    &:hover {
      cursor: pointer;  
    }
`
const SearchModal = (props:SearchModalProps) => {
    return <SearchBar
                $inputHoverBoxShadow={"0 0 5px rgba(0, 123, 155, 0.5)"}
                $boxShadow={'none'}
                $backgroundColor={"rgba(0, 0, 0, 0.0)"}
                $cursor={"pointer"}
                $onClick={() => {
                    console.log("=>(search-modal.tsx:20) ", );
                }}

            />

}
export default SearchModal;