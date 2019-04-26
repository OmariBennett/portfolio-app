import Styled from 'styled-components';
import media from '../base/StyleVariable';

const Wrapper = Styled.div`
	padding: 30px 20px;
	margin-top: 99px;

  ${media.desktop`
		margin: 99px 10% 0px;
	`}



`;


export default Wrapper;