import React from "react";

export default interface ScreenContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    display?: string;
    alignItems?: string;
    justifyContent?: string;
    width?: string;
    height?: string;
    backgroundColor?: string;
    children?: React.ReactNode;
}
