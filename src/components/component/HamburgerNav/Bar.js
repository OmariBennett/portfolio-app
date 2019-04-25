import Styled from 'styled-components';

const Bar = Styled.div`
  width: 35px;
  height: 5px;
  background-color: #fff;
  margin: 6px 0;
  transition: 0.4s;
  transform: ${props => props.top ? 'rotate(-45deg) translate(-9px, 6px)' : undefined };
  transform: ${props => props.bottom ? 'rotate(45deg) translate(-8px, -8px)' : undefined };

  opacity: ${props => props.middle ? 0 : undefined };

`;

export default Bar;