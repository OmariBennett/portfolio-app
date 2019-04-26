import Styled from 'styled-components';

//Components imports
import media from '../../base/StyleVariable';

const Menu = Styled.ul`
	padding: 10px 0px;
	opacity: ${props => props.show ? undefined : 0 };
	display: ${props => props.show ? undefined : 'none' };

	transition: 500ms ease-in-out;
	transition-property: opacity, display;

  ${media.tablet`
  	opacity: 1;
  	display: flex;
  	justify-content: space-around;
  	padding: 0px;
	`}

	${media.desktop`
  	justify-content: flex-end;
	`}

`;

export default Menu;