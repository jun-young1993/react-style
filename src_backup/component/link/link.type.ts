import { ProfileProps } from "../profile/Profile.types";
import {AnchorHTMLAttributes, DetailedHTMLProps} from "react";

export interface LinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
	img?: ProfileProps
}

