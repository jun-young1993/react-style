export class MissingRequiredPropsVariable extends Error {
	constructor(props: string){
		super(`[juny-react-style] missing required props variable => '${props}'`);
	}
}