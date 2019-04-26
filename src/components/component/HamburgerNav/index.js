import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import Styled from 'styled-components';

//Components imports
import Bar from './Bar';
import Menu from './Menu';
import MenuItem from './MenuItem';
import media from '../../base/StyleVariable';

/*NOTES:
	[]- I need to test layout for the navigation menu for screen
		size that's bigger then my laptop screen
	(04/25/19 Omari Bennett )


*/

const Contanier = Styled.div`
  width: 100%;
  display: inline-block;
  background: #62B312;
  padding: 20px 0px 20px 20px;
  position: absolute;
  top: 0;

  ${media.tablet`
	  padding: 20px;
  `}

	${media.desktop`
		background: transparent;
	`}

`;

const activeClassName = 'active';

const StyledNavLink = Styled(NavLink)
	.attrs({activeClassName: activeClassName,})`
		color: #fff;
		text-decoration: none;
		padding-right: 50px;

  ${media.tablet`
		padding-right: 0px;
	`}

	${media.desktop`
		color: #62B312;
	`}

	  &.${activeClassName} {
			color: #B33009;
			font-size: 1.3em;
			font-weight: bold;

			${media.tablet`
				font-size: 1em;
			`}
	  }
`;

const Btn = Styled.div`
  width: 55px;
  padding: 10px;
  cursor: pointer;

  ${media.tablet`
  	display: none;
	`}

`;

class Button extends Component {
	constructor(props) {
		super(props);

		this.state = { isOpen: false };
		this.HandleClick = this.HandleClick.bind(this);
	}

	HandleClick() {
		this.setState(state => ({isOpen: !state.isOpen }));
	}

	render() {
		return (
			<Contanier>
				<Btn onClick={this.HandleClick} >
					<Bar top={this.state.isOpen} />
					<Bar middle={this.state.isOpen} />
					<Bar bottom={this.state.isOpen} />
				</Btn>
				<Menu show={this.state.isOpen}>
					<MenuItem>
						<StyledNavLink exact to='/'>home</StyledNavLink>
					</MenuItem>

					<MenuItem>
						<StyledNavLink to='/html-css'>html / css</StyledNavLink>
					</MenuItem>

					<MenuItem>
						<StyledNavLink to='/javaScript'>javaScript</StyledNavLink>
					</MenuItem>

					<MenuItem>
						<StyledNavLink to='/tic-tac-toe'>tic tac toe</StyledNavLink>
					</MenuItem>

					<MenuItem>
						<StyledNavLink to='/todo'>to do list</StyledNavLink>
					</MenuItem>

				</Menu>
			</Contanier>
		);
	}
}
		

export default Button;