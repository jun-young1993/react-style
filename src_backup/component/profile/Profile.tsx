import styled from "styled-components";
import {ProfileProps} from "./Profile.types";
import {BorderRadius, Height, MaxHeight, MaxWidth, Width} from "../../component/index.style";

const defaultSize = '30px';

export const ProfileWrapTestId = 'profile-wrap';
export const ProfileImgTestId = 'profile-img';

/**
 * The Profile component is used to display user profile information.
 * ProfileProps defines the properties that can be passed to the Profile component.
 *
 * @param {ProfileProps} props - The properties passed to the Profile component
 * 
 * @returns {JSX.Element} The Profile component
 */
export const ProfileWrapStyled = styled.div<ProfileProps>`
  ${({size, radius}: ProfileProps) => `
    text-align: center;
    display:table;
    ${Height(size ?? defaultSize)}
    ${Width(size ?? defaultSize)}
    ${BorderRadius(radius ?? '50%')}
  `}
  
`;
// border-style: solid;
//     border-width: 1px;
const ProfileCellStyled = styled.div`
  display: table-cell;
  vertical-align:middle;
`;


const ProfileImgStyled = styled.img<ProfileProps>`
  ${({size, radius}) => `
    ${MaxWidth(size ?? defaultSize)}
    ${MaxHeight(size ?? defaultSize)}
    ${BorderRadius(radius ?? '50%')}
  `}
`;

/**
 * The Profile component is used to display user profile information.
 * ProfileProps defines the properties that can be passed to the Profile component.
 * 
 * @param {ProfileProps} props - The properties passed to the Profile component
 * @returns {JSX.Element} The Profile component
 */
const Profile = (props: ProfileProps) => {
  return (
  <ProfileWrapStyled 
    {...props} 
    data-testid={ProfileWrapTestId}
  > 
    <ProfileCellStyled>
      <ProfileImgStyled 
        data-testid={ProfileImgTestId}
        {...props}
      />
    </ProfileCellStyled>
  </ProfileWrapStyled>
  )
}
export default Profile;