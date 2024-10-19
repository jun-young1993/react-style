import { lefetOrRightOrTopOrBottom, radius } from "./index.types";

export const Width = (width: string) => {
	return `
		width: ${width ?? '10px'};
	`;
}

export const Height = (height: string) => {
	return `
		height: ${height ?? '10px'};
	`;
}

export const MaxWidth = (width: string) => {
	return `
		max-width: ${width ?? '10px'};
	`;
}

export const MaxHeight = (height: string) => {
	return `
		max-height: ${height ?? '10px'};
	`;
}

export const Margin = (margin: lefetOrRightOrTopOrBottom, size?: string) => {
	return `
		margin-${margin}: ${size ?? '0px'};
	`
}
export const MarginBottom = (size?: string) => {
	return `
		${Margin('bottom',size)}
	`;
}

export const MarginTop = (size?: string) => {
	return `
		${Margin('top',size)}
	`;
}

export const MarginLeft = (size?: string) => {
	return `
		${Margin('left',size)}
	`;
}

export const MarginRight = (size?: string) => {
	return `
		${Margin('right',size)}
	`;
}


export const BorderRadius = (radius: string | radius) => {
	let radiusValue: string;
	if(radius === undefined){
		throw new Error('[BorderRadius] radius undefined');
	}
	switch(radius){
		case 'sm':
			radiusValue = '15%';	
			break;
		case 'md':
			radiusValue = '25%';
			break;
		case 'lg':
			radiusValue = '35%';
			break;
		case 'full':
			radiusValue = '50%';
			break;
		default:
			radiusValue = radius;
	}
	
	return `
		border-radius: ${radiusValue}
	`;
}
