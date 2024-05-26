import React, {Children} from 'react';
import styled from 'styled-components';
import { ListProps } from './list.type';
import {IntrinsicElementsDiv} from "../index.types";

const WrapContainer = styled.div`
  padding: 3px;
  height: 100%;
`;

const ListStyled = styled.div`
  ${(
    {
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
    margin
    }
  ) => `
    width: ${width ?? '100%'};
    height: ${height ?? '100%'};
    display: ${display ?? '100%'};
    flex-direction: ${flexDirection ?? 'column'};
    overflow-y: ${overflowY ?? 'hidden'};
    border-radius: ${borderRadius ?? '6px'};
    border-width: ${borderWidth ?? '1px'};
    border-style: ${borderStyle ?? 'solid'};
    border-color: ${borderColor ?? '#d0d7de'};
    opacity:${opacity ?? '100%'};
    margin: ${margin ?? '5px'};
  `}
`;

const List = ({ children, title, ...divProps }: ListProps) => {
    const listItems = Children.toArray(children);
    return (
        <WrapContainer>
            <ListStyled {...divProps}>
                {title &&
                    <h5 style={{
                        marginLeft: '10px'
                    }}><strong>{title}</strong></h5>
                }
                {listItems}
            </ListStyled>
        </WrapContainer>
    );
};

export default List;