import React from 'react';
import styled from 'styled-components';
import {TreeItemProps, TreeListProps} from "./TreeList.type";
import LightTheme from "../StyleThemeProvider/LightTheme";
import { TextBox } from '../utills';

const TreeContainer = styled.div`
  background-color: ${({ theme }) => theme.snowWhite ?? LightTheme.snowWhite};
  padding: 10px;
  border-radius: 8px;
  box-sizing: border-box;
  width: 100%;
`;

export const TreeHeader = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.mediumGray ?? LightTheme.mediumGray};
  margin-bottom: 10px;
  cursor: pointer; /* 호버 시 마우스 포인터를 링크처럼 변경 */

  &:hover {
    color: ${({ theme }) => theme.darkGray ?? LightTheme.darkGray}; /* 호버 시 색상 변경 */
    text-decoration: underline; /* 호버 시 밑줄 추가 */
  }
`;

export const TreeItem = styled.div<TreeItemProps>`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border-radius: 5px;
  margin-bottom: 5px;
  cursor: pointer;
  background-color: ${({active, theme}) => active ? (theme.paleGray ?? LightTheme.paleGray) : 'transparent'};
  color: ${({ theme }) => theme.black ?? LightTheme.black};
  &:hover {
    background-color: ${({ theme }) => theme.paleGray ?? LightTheme.paleGray};
  }
`;

const TreeItemIcon = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${({ theme }) => theme.paleGray ?? LightTheme.paleGray};
  margin-right: 10px;
  border-radius: 2px;
`;



const TreeList = ({title, icon, items, onClick}: TreeListProps) => {
    return (
        <TreeContainer>
            <TreeHeader>
                {title}
            </TreeHeader>
            {items && items.map(({textOption, ...item}, index) => (
                <TreeItem
                    onClick={()=> {
                        onClick && onClick(item);
                    }}
                    key={(item.title ?? '')+index}
                    active={item.active}>
                    {icon ?? <TreeItemIcon />}
                    <TextBox
                      {...textOption}
                      scroll={false}
                    >
                      {item.title ?? ''}
                    </TextBox>
                    
                </TreeItem>
            ))}
        </TreeContainer>
    );
};

export default TreeList;
