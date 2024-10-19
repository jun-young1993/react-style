import { ProfileProps } from "../../component/profile/Profile.types";


export interface GithubProfileProps extends ProfileProps{
	gitPersonalAccessToken: string
}

export interface GithubUserProfile {
	bio?: string
	avatar_url: string
	blog?: string
	html_url?: string
	name?: string
	email?:string
	location?: string
}