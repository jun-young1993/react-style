import styled from "styled-components";
import { GithubReplyProps } from "./GithubReply.type";
import { MediaMobileOnlyStyle } from "../../libs/media-query";
import { LightTheme } from "component/StyleThemeProvider";

const CommentContainer = styled.div`
  ${({theme}) => theme.lightGrayBlue ?? LightTheme.lightGrayBlue};
  width: 100%;
  background: white;
  border-radius: 5px;
  overflow: hidden;
  margin: 10px 0;
`;

const Header = styled.div`
  position: relative;
  background: ${({theme}) => theme.lightSkyBlue ?? LightTheme.lightSkyBlue};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
  min-height: 20px;
  &:before {
    content: '';
    position: absolute;
    top: 10px; /* Adjust this value to control the vertical position of the arrow */
    left: -10px; /* Adjust this value to control the horizontal position of the arrow */
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 10px solid ${({theme}) => theme.lightSkyBlue ?? LightTheme.lightSkyBlue}; /* Match the arrow color with the header background */
  }
  ${MediaMobileOnlyStyle(`
       &:before {
          left: 0px;
        }
  `)}
`;
const CommentBody = styled.div`
  margin-left: 10px;
  padding: 10px;
  border: 1px solid ${({theme}) => theme.lightAsh ?? theme.lightAsh};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: ${({theme}) => theme.ghostWhite ?? LightTheme.ghostWhite}
`;

const GithubReply = ({
	comment,
  title
}: GithubReplyProps) => {
	return (
		<CommentContainer>
			<Header>
				{title}
			</Header>
			<CommentBody>
				{comment}
			</CommentBody>
		</CommentContainer>
	)
}
export default GithubReply;