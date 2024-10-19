import styled from "styled-components";
import TextBox from "./TextBox";
import { HeadTextProps } from "./index.type";

const StyledHeading = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  font-size: 3rem; /* 더 큰 폰트 크기 */
  font-weight: bold; /* 굵은 폰트 */
  text-transform: uppercase; /* 모든 글자를 대문자로 */
  line-height: 1.2; /* 라인 높이 조정 */
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); /* 텍스트 그림자 추가 */
`;

const StrongTitle = styled.strong`
  font-weight: inherit;
`;

const HeadText = ({children}: HeadTextProps) => {
	return (
		<StyledHeading>
			<StrongTitle>
				<TextBox>
					{children}
				</TextBox>
			</StrongTitle>
	      	</StyledHeading>	
	)
}

export default HeadText;