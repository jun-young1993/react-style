import { ReactNode } from "react";

export interface GithubCommentProps {
	active?: ActiveModeType
	comment?: string
	preview?: string | ReactNode
	onClick?: (value: ActiveModeType, comment: string) => void
	onSubmit?: (comment: string) => void
	onChange?: (comment: string) => void
}

export const ActiveMode = {
	WRITE : 'write',
	PREVIEW : 'preivew'
} as const;

export type ActiveModeType = typeof ActiveMode[keyof typeof ActiveMode];
