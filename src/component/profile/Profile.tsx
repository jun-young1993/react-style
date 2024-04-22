import styled from "styled-components";
import {ProfileProps} from "./Profile.type";

/**
 * The Profile component is used to display user profile information.
 * ProfileProps defines the properties that can be passed to the Profile component.
 *
 * @param {ProfileProps} props - The properties passed to the Profile component
 * @returns {JSX.Element} The Profile component
 */
const Profile = styled.div<ProfileProps>`
  border-style: solid;
  border-width: 2px;
  height: 30px;
  width: 30px;
  border-radius: ${props => {
      console.log("=>(Profile.tsx:18) props", props);
      switch(props.corners){
        case 'sm':
          return '0.125rem;';
        case 'md':
            return 'border-radius: 20.2rem;'
        default:
            return '9999px;';
      }
  }}
`;

export default Profile;