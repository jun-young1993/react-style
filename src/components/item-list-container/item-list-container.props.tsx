import {FlexContainerProps} from "../flex-container/flex-container.props";
import {ButtonStyledThemeType, JunyReactStyleInterface} from "../../shared";
import {ButtonHTMLAttributes} from "react";

export interface ItemListContainerProps extends FlexContainerProps {

}

export interface ItemListItemProps extends JunyReactStyleInterface, ButtonHTMLAttributes<HTMLButtonElement>{
    $variant?: ButtonStyledThemeType;
    children?: React.ReactNode;
}