import {ListItemProps} from "./list.type";


const ListItem = ({ children }: ListItemProps) => {
    return (
        <li>
            {children}
        </li>
    );
};

export default ListItem;