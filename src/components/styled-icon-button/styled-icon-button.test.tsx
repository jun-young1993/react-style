import { render, screen } from "@testing-library/react";
import StyledIconButton from "./styled-icon-button";
const SearchIconPath = (
  <path d="M10 2a8 8 0 015.292 13.708l5.417 5.417a1 1 0 01-1.415 1.415l-5.417-5.417A8 8 0 1110 2zm0 2a6 6 0 100 12 6 6 0 000-12z" />
);
describe('<StyledIconButton />', () => {
    it('Should this component be rendered', () => {
        render(<StyledIconButton>{SearchIconPath}</StyledIconButton>);
          
        // 버튼 요소가 있는지 확인
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
        
        // SVG 태그가 버튼 내부에 있는지 확인
        const svgElement = buttonElement.querySelector('svg');
        expect(svgElement).toBeInTheDocument();

        // 아이콘의 path가 렌더링되었는지 확인
        const pathElement = svgElement?.querySelector('path');
        expect(pathElement).toBeInTheDocument();
    });
});