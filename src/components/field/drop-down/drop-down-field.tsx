import styled from 'styled-components';
import { DropDownArrowInterface, DropDownProps } from './drop-down-field.interface';

const DropdownContainer = styled.div`
  position: relative;
  width: 200px;
  height: 50px;
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

const DropdownMenu = styled.ul`
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
  z-index: 10;
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

const DropdownField = ({$isOpen, $onToggle, $onSelect, $items, $children}:DropDownProps) => {
  

  return (
    <DropdownContainer>
      <DropdownButton onClick={(event) => $onToggle && $onToggle(event)}>
            {$children && 'sdf'}
        <Arrow open={$isOpen}>▼</Arrow>
      </DropdownButton>
      {$isOpen && (
        <DropdownMenu>
          {$items && $items.map((item, index) => (
            <DropdownItem key={index} onClick={(event) => $onSelect && $onSelect(event, item, index)}>
              {item}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

export default DropdownField;
