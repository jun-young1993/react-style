import { FlexContainer, FlexContainerProps } from "../../../components/flex-container";

export default function FullScreen(props: FlexContainerProps){
    return <FlexContainer {...props} $width={props.$width || "100%"} $height={props.$height || "100%"} />
}