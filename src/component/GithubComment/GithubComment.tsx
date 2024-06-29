import styled, { keyframes } from "styled-components";
import { ActiveMode, GithubCommentProps } from "./GithubComment.type";
import { LightTheme } from "../StyleThemeProvider";
import { ChangeEvent, TextareaHTMLAttributes, useState } from "react";
import { MediaMobileOnlyStyle } from "../../libs/media-query";
import { capitalize } from "../utills/capitalize";

const CommentEditorContainer = styled.div`
  border: 1px solid ${({theme}) => theme.silverGray ?? LightTheme.silverGray};
  border-radius: 6px;
  width: 100%;
  background-color: ${({theme}) => theme.white ?? LightTheme.white};
  box-sizing: border-box;
  overflow: hidden; 
  display: flex;
  flex-direction: column;
`;
const Tabs = styled.div`
  
`;
const Tab = styled.button`
  padding: 10px;
  font-weight: bold;
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  color: ${({theme}) => theme.black ?? LightTheme.black};
  &:hover, &.active {
    border-bottom: 2px solid ${({theme}) => theme.azureBlue ?? LightTheme.azureBlue};
  }
`;
const CommentBoxWrap = styled.div`
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    box-sizing: border-box;
`;
const CommentBox = styled.textarea<TextareaHTMLAttributes<HTMLTextAreaElement>>`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${({theme}) => theme.silverGray ?? LightTheme.silverGray};
  border-radius: 5px;
  resize: vertical;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 35px; 
  color: ${({theme}) => theme.black ?? LightTheme.black};
  background-color: ${({theme}) => theme.ghostWhite ?? LightTheme.ghostWhite};
`;
const PreviewBox = styled.div`
  width: 100%;
  min-height: 100%;
  height: auto;
  border: 1px solid ${({theme}) => theme.silverGray ?? LightTheme.silverGray};
  border-radius: 5px;
  border: none;
  padding: 10px;
  box-sizing: border-box;
  color: ${({theme}) => theme.black ?? LightTheme.black};
  background-color: ${({theme}) => theme.ghostWhite ?? LightTheme.ghostWhite};
`;

const CommentButton = styled.button`
  float: right;
  margin: 10px;
  padding: 6px 12px;
  background-color: ${({theme}) => theme.emeraldGreen ?? LightTheme.emeraldGreen};
  font-weight:500;
  line-height: 20px;
  vertical-align: middle;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  max-height: 35px;
  &:hover {
    background-color: ${({theme}) => theme.forestGreen ?? LightTheme.forestGreen};
  }
`;
const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  border-top-color: #333;
  animation: ${spin} 0.8s ease-in-out infinite;
`;


const GithubComment = ({
	active='write',
	preview,
  isLoading,
	onClick,
	onSubmit,
	onChange

}: GithubCommentProps) => {
	const [comment, setComment] = useState<string>('');
  
	const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setComment(e.target.value);
		onChange && onChange(e.target.value);
	    };
	return (
		<CommentEditorContainer>
			<Tabs>
				<Tab 
					className={active === ActiveMode.WRITE ? 'active' : ''}
					onClick={() => {
						onClick && onClick(ActiveMode.WRITE, comment)
					}}
				>
					{capitalize(ActiveMode.WRITE)}
				</Tab>
				<Tab 
					className={active === ActiveMode.PREVIEW ? 'active' : ''}
					onClick={() => {
						onClick && onClick(ActiveMode.PREVIEW, comment)
					}}
				>
					{capitalize(ActiveMode.PREVIEW)}
				</Tab>
			</Tabs>
			<CommentBoxWrap>
				{active === ActiveMode.WRITE
				?<CommentBox
					value={comment}
					onChange={handleCommentChange}
				/>
				:<PreviewBox>{preview}</PreviewBox>}
			</CommentBoxWrap>
      
      <CommentButton
      onClick={async () => {
        if(!isLoading){
          const result = onSubmit && await onSubmit(comment);
          if(result !== undefined){
            setComment(result ?? '');
          }
        }
      }}
    >
      {isLoading ? <SpinnerContainer />: 'Comment'}
    </CommentButton>
			
		</CommentEditorContainer>
	)
}
export default GithubComment;