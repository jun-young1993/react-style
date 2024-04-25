import { radius } from "./index.types";


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