import Styled from 'styled-components';


const Wrapper = Styled.div`
	background: papayawhip;
	display: grid;
	width: 100%;
	padding: 20px 15px;
`;

const TabOpen = Styled.div`
	height: 300px;
	background-color: #f2f2f2;
	border: 1px solid #a6a6a6;
`;

const TabClose = Styled.div`
	height: 40px;
	background-color: navy;
	border-bottom: 1px solid;
	display: flex;
`;
 
const Text = Styled.p`
 	color: #ffffff;
 	text-transform: uppercase;
 	padding-top: 11px;
 	padding-left: 20px;
 	font-size: 1.1em;
`;

const Box = Styled.div`
width: 40px;
background-color: red;
height: 40px;
border-bottom: 1px solid;
`;

export { Wrapper, TabOpen, Text, TabClose, Box };