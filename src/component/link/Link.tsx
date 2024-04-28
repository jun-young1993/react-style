import styled from "styled-components";
import {LinkProps} from "./link.type";

const LinkStyled = styled.a<LinkProps>`
  color: blue;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: red;
  }
`;

const Link = ({children, ...props}: LinkProps) => {
    return <LinkStyled {...props}>{children}</LinkStyled>
}

export default Link;