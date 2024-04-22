import {ButtonProps} from "./Button.types";

/**
 *
 * @param {ButtonProps} props
 * @constructor
 */
const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button>{props.text}</button>
    )
}


export default Button;