import React from 'react';
import NavBar from './NavBar'

const Header = ({ navigation }) => {
	return (
		<header>
			<NavBar navigation={navigation} />
		</header>
	);
};

export default Header
