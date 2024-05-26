import styled from "styled-components";

// Media query functions
export const MediaDesktopOnlyStyle = (style: string) => `
    @media (max-width: 1199px) {
        ${style}
    }
`;

export const MediaTabletOnlyStyle = (style: string) => `
    @media (max-width: 1199px) and (min-width: 700px) {
        ${style}
    }
`;

export const MediaMobileOnlyStyle = (style: string) => `
    @media (max-width: 699px) {
        ${style}
    }
`;

// Styled components
export const MediaDesktopOnly = styled.div`
    display: block;
    ${MediaDesktopOnlyStyle(
    "display: none;"
)}
`;

export const MediaTabletOnly = styled.div`
    display: block;
    ${MediaTabletOnlyStyle(
    "display: none;"
)}
`;

export const MediaMobileOnly = styled.div`
    display: block;
    ${MediaMobileOnlyStyle(
    "display: none;"
)}
`;
