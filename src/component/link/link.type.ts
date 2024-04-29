import { ProfileProps } from "component/profile/Profile.types";
import {AnchorHTMLAttributes, DetailedHTMLProps} from "react";

export interface LinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
	img?: ProfileProps
}

