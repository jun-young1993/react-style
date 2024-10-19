import { ReactNode } from "react";

export interface GithubCommentProps {
	active?: ActiveModeType
	comment?: string
	isLoading?: boolean,
	preview?: string | ReactNode
	onClick?: (value: ActiveModeType, comment: string) => Promise<void> | void
	onSubmit?: (comment: string) => Promise<void | string> | void | string
	onChange?: (comment: string) => Promise<void> | void
}

export const ActiveMode = {
	WRITE : 'write',
	PREVIEW : 'preivew'
} as const;

export type ActiveModeType = typeof ActiveMode[keyof typeof ActiveMode];
