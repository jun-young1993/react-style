import React from "react";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    display?: string;
    alignItems?: string;
    justifyContent?: string;
    width?: string;
    height?: string;
    backgroundColor?: string;
    children?: React.ReactNode;
}


