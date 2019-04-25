import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import Styled from 'styled-components';

import Bar from './Bar';
import Menu from './Menu';
import MenuItem from './MenuItem';

const Contanier = Styled.div`
  width: 100%;
  display: inline-block;
  background: #62B312;
  padding: 20px 0px 20px 20px;
  cursor: pointer;
`;

const anchorStyle = { color: '#fff', textDecoration: 'none', paddingRight: '50px'};
const selected = {
	color: '#B33009',
	fontSize: '1.3em',
	fontWeight: 'bold',
};

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
			<Contanier onClick={this.HandleClick} >
				<Bar top={this.state.isOpen} />
				<Bar middle={this.state.isOpen} />
				<Bar bottom={this.state.isOpen} />
				<Menu show={this.state.isOpen}>
					<MenuItem>
						<NavLink  exact to='/' activeStyle={selected} style={anchorStyle}>home</NavLink>
					</MenuItem>

					<MenuItem>
						<NavLink to='/html-css' activeStyle={selected} style={anchorStyle}>html / css</NavLink>
					</MenuItem>

					<MenuItem>
						<NavLink to='/javaScript' activeStyle={selected} style={anchorStyle}>javaScript</NavLink>
					</MenuItem>

					<MenuItem>
						<NavLink to='/tic-tac-toe' activeStyle={selected} style={anchorStyle}>tic tac toe</NavLink>
					</MenuItem>

					<MenuItem>
						<NavLink to='/todo' activeStyle={selected} style={anchorStyle}>to do list</NavLink>
					</MenuItem>

				</Menu>
			</Contanier>
		);
	}
}
		

export default Button;