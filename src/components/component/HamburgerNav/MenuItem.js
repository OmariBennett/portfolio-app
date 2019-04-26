import Styled from 'styled-components';
import media from '../../base/StyleVariable';

const MenuItem = Styled.li`
	list-style: none;
	width: 90%;
	font-size: 1.2em;
	text-transform: uppercase;
	color: #ffffff;
	border-bottom: 1px solid;
	padding-left: 5px;
	margin: 20px 0;

  ${media.tablet`
  	width: auto;
  	border-bottom: 0px;
  	display: inline-block;
	`}

	${media.desktop`
		padding: 0px 20px;
	`}

`;
export default MenuItem;