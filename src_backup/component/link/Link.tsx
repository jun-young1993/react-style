import styled from "styled-components";
import {LinkProps} from "./link.type";
import {Profile} from "../profile";


const LinkStyled = styled.a<LinkProps>`
  color: blue;
  text-decoration: none;
  transition: color 0.3s ease;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &:hover {
    color: red;
    text-decoration-line: underline;
  }
`;

/**
 * 
 * @param {LinkProps} props
 *  
 * @returns 
 * 
 * @example
 * ```tsx
 *  <Link 
 *    href="https://juny.vercel.app" 
 *  />
 * ```
 */
const Link = ({children, img,...props}: LinkProps) => {
    
    return (
      <LinkStyled 
        {...props}
      >
        {img &&
        <Profile {...img}/>}
        {children}
      </LinkStyled>
    )
}

export default Link;