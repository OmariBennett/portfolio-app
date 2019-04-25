import Styled from 'styled-components';

const Menu = Styled.ul`
	padding: 10px 0px;
	opacity: ${props => props.show ? undefined : 0 };
	display: ${props => props.show ? undefined : 'none' };

	transition: 500ms ease-in-out;
	transition-property: opacity, display;
`;

export default Menu;