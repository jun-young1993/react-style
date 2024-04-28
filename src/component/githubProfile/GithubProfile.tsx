import { useEffect, useState } from "react";
import {Profile} from "../../component/profile/index";
import { GithubProfileProps, GithubUserProfile } from "./GithubProfile.type";
import { Spinner } from "../../component/spinner";
import {Link} from "../link";

const GithubProfile = (props: GithubProfileProps) => {
	const [githubUserProfileData, setGithubUserProfileData] = useState<GithubUserProfile | null>(null);
	const [githubUserProfileError, setGithubUserProfileError] = useState<string | null>(null);

	const {gitPersonalAccessToken , ...styleProps} = props;

	useEffect(() => {
		fetch("https://api.github.com/user", {
			method: 'GET',
			headers: {
				'Accept' : "application/vnd.github+json",
				'X-GitHub-Api-Version': "2022-11-28",
				'Authorization': `Bearer ${gitPersonalAccessToken}`
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
	},[]);
console.log(githubUserProfileData);
	return (
		(githubUserProfileData === null) 
			? (githubUserProfileError)
				? <span>githubUserProfileError</span>
				: <Spinner />
			: (
				<div>
					<Profile
						src={githubUserProfileData.avatar_url}
						{...styleProps}
					/>
					{githubUserProfileData.name &&
						<h1>{githubUserProfileData.name}</h1>}
					{githubUserProfileData.html_url &&
						<div>
							<Link href={githubUserProfileData.html_url} target={"_blank"} rel={"nofollow"}>
								{githubUserProfileData.html_url}
							</Link>
						</div>
					}

				</div>

			)
	)
}

export default GithubProfile;