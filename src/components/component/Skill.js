import Styled from 'styled-components';

const Skill = Styled.li`
	list-style: none;
	padding: 6px 0px;
	color: ${props => props.color ? '#336600' : '#000'}
	font-weight: ${props => props.color ? 'bold' : 'normal'};
	text-decoration: ${props => props.color ? 'underline' : 'none'};
`;

export default Skill;