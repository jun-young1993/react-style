import { FlexContainer, FlexContainerProps } from "../../../components/flex-container";

export default function FullScreen(props: FlexContainerProps){
    return <FlexContainer {...props} $width="100%" $height="100%" />
}