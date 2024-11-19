import { HTMLDivElementInterface } from "../div/div.interface";

export interface HTMLFlexInterface extends HTMLDivElementInterface {
    display?: 'flex' | 'inline-flex';
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';
    flex?: string;
    gap?: string;
    padding?: string;
    rowGap?: string;
    columnGap?: string;
    flexGrow?: number;
    flexShrink?: number;
    flexBasis?: string;
    order?: number;
    borderColor?: string;
    alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
}