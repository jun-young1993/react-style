import React, {Children} from 'react';
import styled from 'styled-components';
import {ScreenProps} from "./index.type";
import {SpacerProps} from "../BetweenContainer/BetweenContainer.type";

const Header = styled.header`
  height: 60px;  /* 원하는 헤더 높이 설정 */
  width: 100%;
  display: flex;
`;

const Footer = styled.footer`
  height: 60px;  /* 원하는 푸터 높이 설정 */
  width: 100%;
  display: flex;
`;

const Body = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
`;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
const Spacer = styled.div<{gap?: string}>`
  flex: 0 0 ${({ gap }) => gap ?? '1rem'};
`;
const Screen = ({children, footerGap}: ScreenProps) => {
    const [header, body, footer] = Children.toArray(children);
    return (
        <LayoutContainer>
            <Header>
                {header}
            </Header>
            <Body>
                {body}
            </Body>
            <Footer>
                {footer}
            </Footer>
            {footerGap && <Spacer gap={footerGap}/>}
        </LayoutContainer>
    );
}

export default Screen;
