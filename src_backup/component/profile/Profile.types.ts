import { DetailedHTMLProps, ImgHTMLAttributes } from "react";
import { radius, size } from "../index.types";

export interface ProfileProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>,HTMLImageElement>{
    radius?: radius | string
    size?: string
    src?: string
}