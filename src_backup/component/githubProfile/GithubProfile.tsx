import { useEffect, useState } from "react";
import {Profile} from "../../component/profile/index";
import { GithubProfileProps, GithubUserProfile } from "./GithubProfile.type";
import { Spinner } from "../../component/spinner";
import {Link} from "../link";
import { MissingRequiredPropsVariable } from "../../libs/exception/MissingRequiredPropsVariable";
import { AlignBox } from "../../component/alignBox";
import MarginBox  from "../../component/marginBox/MarginBox";
import {TextOverFlow} from "../textOverFlow";

/**
 * 
 * @param {GithubProfileProps} props 
 * @returns 
 * @example
 * ```tsx
 * 	<GithubProfile
 * 		gitPersonalAccessToken={"ghp~###"}
 * 	/>
 * 	</GithubProfile>
 * ```
 */
const GithubProfile = (props: GithubProfileProps) => {
	const [githubUserProfileData, setGithubUserProfileData] = useState<GithubUserProfile | null>(null);
	const [githubUserProfileError, setGithubUserProfileError] = useState<string | null>(null);

	const {gitPersonalAccessToken , ...styleProps} = props;
	
	useEffect(() => {
		if(!gitPersonalAccessToken){
			throw new MissingRequiredPropsVariable('gitPersonalAccessToken');
		}
		if(githubUserProfileData === null){
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
				setGithubUserProfileError(response.statusText);
	
				return response.json();
			})
			.then((result: GithubUserProfile) => {
				
				setGithubUserProfileData(result);
			})
			.catch(error => {
				setGithubUserProfileError(error.toString());
				// throw new Error(error.toString());
			});
		}

	},[githubUserProfileData,setGithubUserProfileError]);
	
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
					<AlignBox
						align={"left"}
					>
					{githubUserProfileData.name &&
						<MarginBox
							top="5px"
							bottom="10px"
						>
							<h1><strong>😀 {githubUserProfileData.name}</strong></h1>
						</MarginBox>}
					{githubUserProfileData.bio &&
						<MarginBox
							bottom="10px"
						>
						<div>{githubUserProfileData.bio}</div>
						</MarginBox>
					}
					{githubUserProfileData.location &&
						<MarginBox bottom="2px">
							<span>🌐 {githubUserProfileData.location}</span>
						</MarginBox>
					}
					{githubUserProfileData.email &&
						<MarginBox bottom="2px">
							<Link 
								href={`mailto: ${githubUserProfileData.email}`} 
								target={"_blank"} 
								rel={"nofollow"}
								// img={{
								// 	src:'%PUBLIC_URL%/images/github.png'
								// }}
							>
								✉️ {githubUserProfileData.email}
							</Link>
						</MarginBox>}
					{githubUserProfileData.html_url &&
						<MarginBox bottom="2px" >
							<Link 
								href={githubUserProfileData.html_url} 
								target={"_blank"} 
								rel={"nofollow"}
								// img={{
								// 	src:'%PUBLIC_URL%/images/github.png'
								// }}
							>
								{/*<TextOverFlow>*/}
								🔗 {githubUserProfileData.html_url}
								{/*</TextOverFlow>*/}
							</Link>
						</MarginBox>
					}
					{githubUserProfileData.blog &&
						<MarginBox bottom="2px" >
							<Link 
								href={githubUserProfileData.blog} 
								target={"_blank"} 
								rel={"nofollow"}
								// img={{
								// 	src:'%PUBLIC_URL%/images/github.png'
								// }}
							>
								📝 {githubUserProfileData.blog}
							</Link>
						</MarginBox>
					}
					</AlignBox>
				</div>

			)
	)
}

export default GithubProfile;