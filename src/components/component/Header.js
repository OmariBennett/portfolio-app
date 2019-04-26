/*@flow*/
import React, { Component } from 'react';
//Components imports
import HamburgerNav from './HamburgerNav/index'

class Header extends Component {

  render() {
		return (
				<header>
					<HamburgerNav />
				</header>
		);
  }
}


export default Header;