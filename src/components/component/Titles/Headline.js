import Styled from 'styled-components';
import media from '../../base/StyleVariable';

const Headline = Styled.h1`
	font-family: 'Architects Daughter';
	text-align: center;
	font-size: 2.5em;
	color: #B33009;

	${media.tablet`
		text-align: left;
	`}
`;

export default Headline;