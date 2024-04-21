import {ButtonProps} from "./Button.types";

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button>{props.text}</button>
    )
}


export default Button;