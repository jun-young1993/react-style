import {FlexContainerProps} from "../flex-container/flex-container.props";
import { ReactNode } from "react";

export interface ItemListContainerProps extends FlexContainerProps {
    $items?: (ReactNode)[]
}
