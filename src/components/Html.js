/*@flow*/
import React from 'react';

import { Wrapper, TabOpen, TabClose, Text, Box } from './layout/Wrapper';

const Html = () => {
	return (
			<Wrapper>
				<TabOpen>
					typography
				</TabOpen>

				<TabClose>
					<Box />
					<Text>color theory</Text>
				</TabClose>

				<TabClose>
					<Box />
					<Text>composition</Text>
				</TabClose>

				<TabClose>
					<Box />
					<Text>images</Text>
				</TabClose>
			</Wrapper>
	);
}

export default Html;