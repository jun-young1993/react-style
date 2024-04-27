import { render } from "@testing-library/react"
import Profile, { ProfileImgTestId, ProfileWrapTestId } from "./Profile";
import { ProfileProps } from "./Profile.types";



describe('<Profile />', () => {
	      const props = {
		size: 40,
		radius: '20%',
		src: 'profile.jpg',
		alt: 'Profile Picture',
	      };
	    
	      it('renders Profile component with provided props', () => {
		const { getByTestId } = render(<Profile {...props} />);
		
		// ProfileWrapStyled test
		const profileWrap = getByTestId(ProfileWrapTestId);
		expect(profileWrap).toHaveStyle(`height: ${props.size}px`);
		expect(profileWrap).toHaveStyle(`width: ${props.size}px`);
		expect(profileWrap).toHaveStyle(`border-radius: ${props.radius}`);
	    
		// ProfileImgStyled test
		const profileImg = getByTestId(ProfileImgTestId);
		expect(profileImg).toHaveAttribute('src', props.src);
		expect(profileImg).toHaveAttribute('alt', props.alt);
	      });
	    
	      it('renders Profile component with default size if size prop is not provided', () => {
		const { getByTestId } = render(<Profile src={props.src} />);
		const profileWrap = getByTestId(ProfileWrapTestId);
		expect(profileWrap).toHaveStyle(`height: 30px`);
		expect(profileWrap).toHaveStyle(`width: 30px`);
	      });
	    
	      it('renders Profile component with default radius if radius prop is not provided', () => {
		const { getByTestId } = render(<Profile src={props.src} />);
		const profileWrap = getByTestId(ProfileWrapTestId);
		expect(profileWrap).toHaveStyle(`border-radius: 50%`);
	      });
	
});


