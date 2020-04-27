import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
`;

//head-portrait
const HeadPortrait = () => {
	return (
		<Img
			src={require('src/assets/images/layout/person.png')}
			alt='head-portrait'
		/>
	);
};

export default HeadPortrait;
