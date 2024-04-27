import { useEffect, useState } from "react";
import {Profile} from "../../component/profile/index";
import { GithubProfileProps, GithubUserProfile } from "./GithubProfile.type";
import { Spinner } from "../../component/spinner";
import { ProfileWrapStyled } from "component/profile/Profile";

const GithubProfile = (props: GithubProfileProps) => {
	const [githubUserProfileData, setGithubUserProfileData] = useState<GithubUserProfile | null>(null);
	
	const [githubUserProfileError, setGithubUserProfileError] = useState<string | null>(null);
	useEffect(() => {
		fetch("https://api.github.com/user", {
			method: 'GET',
			headers: {
				'Accept' : "application/vnd.github+json",
				'X-GitHub-Api-Version': "2022-11-28",
				'Authorization': `Bearer ${props.gitPersonalAccessToken}`
			},
		})
		.then(response => {
			if(response.status !== 200){
				setGithubUserProfileError(response.statusText);
				// throw new Error(response.statusText);
			}

			return response.json();
		})
		.then((result: GithubUserProfile) => {
			
			setGithubUserProfileData(result);
		})
		.catch(error => {
			setGithubUserProfileError(error.toString());
			// throw new Error(error.toString());
		});
	},[])

	return (
		(githubUserProfileData === null) 
			? (githubUserProfileError)
				? <span>githubUserProfileError</span>
				: <Spinner />
			: <Profile 
				src={githubUserProfileData.avatar_url} 
				{...props} 
			/>
	)
}

export default GithubProfile;