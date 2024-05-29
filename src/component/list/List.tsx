import React, {Children} from 'react';
import styled, { css } from 'styled-components';
import { ListDivStyleProps, ListProps } from './list.type';

const WrapContainer = styled.div`
  padding: 3px;
  height: 100%;
`;

const ListStyled = styled.div<ListDivStyleProps>`
  ${({
    theme,
    width,
    height,
    display,
    flexDirection,
    overflowY,
    borderRadius,
    borderWidth,
    borderStyle,
    borderColor,
    opacity,
    margin,
    backgroundColor,
    }) => `
    width: ${width ?? '100%'};
    height: ${height ?? '100%'};
    display: ${display ?? '100%'};
    flex-direction: ${flexDirection ?? 'column'};
    overflow-y: ${overflowY ?? 'hidden'};
    background-color: ${backgroundColor ?? theme.lightBlueGray};
    border-radius: ${borderRadius ?? '6px'};
    border-width: ${borderWidth ?? '1px'};
    border-style: ${borderStyle ?? 'solid'};
    border-color: ${borderColor ?? theme.lightGray};
    opacity:${opacity ?? '100%'};
    margin: ${margin ?? '5px'};
  `}
`;

const List = ({ children, title, headingLevel, headingAlign, ...divProps }: ListProps) => {
    const listItems = Children.toArray(children);
    
    const Heading = (headingLevel ?? 'h5') as unknown as keyof JSX.IntrinsicElements;
    
    return (
        <WrapContainer>
            <ListStyled {...divProps}>
              {title && <Heading style={{ textAlign: headingAlign ?? 'center' }} >{title}</Heading>}
                {listItems}
            </ListStyled>
        </WrapContainer>
    );
};

export default List;