/*@flow*/
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
			<header>
				<h1>Hola Wold...</h1>
				<ul>
					<li>
						<Link to='/'>home</Link>
					</li>
					<li>
						<Link to='/html-css'>html / css</Link>
					</li>
					<li>
						<Link to='/javaScript'>javaScript</Link>
					</li>
					<li>
						<Link to='/tic-tac-toe'>Tic Tac Toe</Link>
					</li>
					<li>
						<Link to='/todo'>Todo</Link>
					</li>
				</ul>
			</header>
	);
}

export default Header;