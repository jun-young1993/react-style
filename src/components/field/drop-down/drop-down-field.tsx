import styled from 'styled-components';
import { DropDownArrowInterface, DropDownContainerInterface, DropDownItemContainerInterface, DropDownItemInterface, DropDownProps } from './drop-down-field.interface';
import { useStyledTheme, zIndexConstants } from '../../../shared';
import { useEffect } from 'react';

const DropdownContainer = styled.div<DropDownContainerInterface>`
  position: relative;
  width: ${({width}) => width};
  height: ${({height}) => height};
  z-index: ${({$zIndex}) => $zIndex || zIndexConstants.dropDownItem};
`;

const DropdownButton = styled.button`
  width: 100%;
  height: 100%;
  padding: 10px 15px;
  font-size: 16px;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  &:hover {
    background-color: #f9f9f9;
  }
`;

const DropdownMenu = styled.ul<DropDownItemContainerInterface>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  list-style: none;
  
`;

const DropdownItem = styled.li`
  padding: 10px 15px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Arrow = styled.span<DropDownArrowInterface>`
  display: inline-block;
  margin-left: 8px;
  transition: transform 0.2s ease;

  ${(props) => props.open && `
    transform: rotate(180deg);
  `}
`;

const DropDownField = <T extends DropDownItemInterface,>({
  $isOpen, 
  $items, 
  children,
  $size = "xs",
  $emptyText,
  $firstSelect,
  $onToggle, 
  $onSelect, 
  $zIndex,
}:DropDownProps<T> & DropDownItemContainerInterface) => {
  
  const {fieldDefault, field} = useStyledTheme();
  const theme = field[fieldDefault].dropDown
  if($firstSelect && $items && $items.length > 0){
    const firstItem = $items[0];
    $onSelect && $onSelect(firstItem, 0)
  }
 
  return (
    <DropdownContainer
      width={theme.size[$size].width}
      height={theme.size[$size].height}
      $zIndex={$zIndex}
    >
      <DropdownButton onClick={(event) => $onToggle && $onToggle(event)}>
            <div>{children || $emptyText}</div>
        <Arrow open={$isOpen}>▼</Arrow>
      </DropdownButton>
      {$isOpen && (
        <DropdownMenu
          $zIndex={$zIndex}
        >
          {$items && $items.map((item, index) => (
            <DropdownItem key={item.name} onClick={(event) => $onSelect && $onSelect(item, index, event)}>
              {item.name}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

export default DropDownField;
