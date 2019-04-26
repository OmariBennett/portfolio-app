/*@flow*/
import React from 'react';

//Components imports
import Wrapper from './Wrapper';
import Headline from '../component/Titles/Headline';
import SubTitle from '../component/Titles/SubTitle';
import SkillsContainer from '../component/SkillsContainer';
import Skills from '../component/Skills';
import Skill from '../component/Skill';

const About = () => {
	return (
			<Wrapper>
				<Headline>Welcome to my portfilio</Headline>
				<br />
				<SubTitle>Omari Bennett</SubTitle>
				<br />

				<p>I am a front-end web developer with skills in CSS, HTML, and JavaScript.
					 I am passionate about web design and providing an engaging user experience on all platforms.
				</p>

				<br />
				
				<p>Continual education and keeping up with the latest technology trends are both very important to me.
						I look forward to applying my previous work experience in business to a new career in tech.</p>
				<br />

				<SubTitle>skills / knowledge</SubTitle>
				<br />

				<SkillsContainer>
					<Skills>
						<Skill color >HTML</Skill>
						<Skill>Pug / Jade</Skill>
						<Skill>React</Skill>
					</Skills>

					<br />

					<Skills>
						<Skill color >CSS</Skill>
						<Skill>SASS</Skill>
						<Skill>styled-components</Skill>
					</Skills>
					
					<br />

					<Skills>
						<Skill color >JavaScript</Skill>
						<Skill>Node.js</Skill>
						<Skill>Express.js</Skill>
						<Skill>SQL & MongoDB</Skill>
					</Skills>
				</SkillsContainer>

				<br />
				<br />

				<SubTitle>Contact me</SubTitle>
				<form>
					<label>First Name</label>
					<input type='text' />

					<br />

					<label>Last Name</label>
					<input type='text' />

					<br />

					<label>Email</label>
					<input type='email' />

					<br />

					<label>Password</label>
					<input type='password' />

					<br />

					<textarea>Email body...</textarea>
				</form>

				<br />
				<br />
				<br />
				<br />
			</Wrapper>
	);
}

export default About;