/*@flow*/
import React from 'react';

//Image File imports
import parkingLot from '../../asset/alex-grodkiewicz-80908-unsplash.jpg';
import a from '../../asset/tyler-lillico-443202-unsplash.jpg'
import b from '../../asset/tom-butler-218-unsplash.jpg'
import c from '../../asset/sandra-ahn-mode-639495-unsplash.jpg'
import d from '../../asset/sandra-ahn-mode-639490-unsplash.jpg'
import e from '../../asset/leo-rivas-25956-unsplash.jpg'

const Desgin = () => {
	return (
		<React.Fragment>
			<div style={ wrapper }>
				<div style={sectionA}>
					<div>
						<p style={{ ...QuandoStyle, ...__header }}>Quando Font</p>
						<h1 style={{ ...QuandoStyle, ...__body }}>HEADER #1</h1>
						<h2 style={ QuandoStyle }>HEADER #2</h2>
						<h3 style={ QuandoStyle }>HEADER #3</h3>
						<h4 style={ QuandoStyle }>HEADER #4</h4>
						<h5 style={ QuandoStyle }>HEADER #5</h5>
						<h6 style={ QuandoStyle }>HEADER #6</h6>
						<p style={ QuandoStyle }>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
					</div>

					<div>
						<p style={{ ...ArchitectsStyle, ...__header }}>Architects Daughter Font</p>
						<h1 style={{ ...ArchitectsStyle, ...__body }}>HEADER #1</h1>
						<h2 style={ ArchitectsStyle }>HEADER #2</h2>
						<h3 style={ ArchitectsStyle }>HEADER #3</h3>
						<h4 style={ ArchitectsStyle }>HEADER #4</h4>
						<h5 style={ ArchitectsStyle }>HEADER #5</h5>
						<h6 style={ ArchitectsStyle }>HEADER #6</h6>
						<p style={ ArchitectsStyle }>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>	
					</div>
				</div>

				<div style={ sectionC }>
					<div style={{ background: `url(${parkingLot})`, ...imgBox }}></div>
					<div style={{ background: `url(${a})`, ...imgBox }}></div>
					<div style={{ background: `url(${b})`, ...imgBox }}></div>
					<div style={{ background: `url(${c})`, ...imgBox }}></div>
					<div style={{ background: `url(${d})`, ...imgBox }}></div>
					<div style={{ background: `url(${e})`, ...imgBox }}></div>
				</div>

				<div style={ sectionB }>
					<div style={{ ...box, background: '#62B312' }}>Christi</div>
					<div style={{ ...box, background: '#0B2073' }}>Sapphire</div>
					<div style={{ ...box, background: '#336600' }}>Verdun Green</div>
					<div style={{ ...box, background: '#331005' }}>Seal Brown</div>
					<div style={{ ...box, background: '#B33009' }}>Rust</div>
				</div>

				<div>
					Addational Notes:
					<br />
					<ul>
						<li>Fonts:
							<ul>
								<li>Quando is for the body fonts</li>
								<li>Architects is for the header fonts</li>
							</ul>
						</li>

						<br />

						<li>Color:
							<ul>
								<li>Primary Color: Verdun Green</li>
								<li>Primary "light" Color: Christi</li>
								<li>Secondary Color: Sapphire</li>
								<li>Compelmentary Color: Rust</li>
								<li>Compelmentary "dark" Color: Seal Brown</li>
							</ul>
						</li>

					</ul>
				</div>
			</div>
		</React.Fragment>
	);
}

const wrapper = {
	display: 'grid',
	gridTemplateRows: '2fr 1fr',
	gridTemplateColumns: '1fr 1fr',
}

const QuandoStyle = {
	fontFamily: 'Quando',
}

const ArchitectsStyle = {
	fontFamily: 'Architects Daughter'
}

const __header = {
	display: 'inline-block',
	background: 'black',
	color: 'white',
	padding: '10px 20px',
}

const __body = {
	margin: '5px'
}

const sectionA = {
	display: 'flex',
	padding: '0px 5px',
	paddingTop: '200px',
	margin: '30px 0px'
}

const sectionB = {
	gridColumn: '2/1',
	display: 'flex',
	padding: '50px'
}

const sectionC = {
	margin: '20px',
	display: 'flex',
	flexWrap: 'wrap'
}

const box = {
	color: 'white',
	width: '150px',
	height: '150px',
	textAlign: 'center',
	textTransform: 'uppercase'
}

const imgBox = {
	width: '200px',
	height: '200px',
	backgroundSize: 'cover'
}

export default Desgin;