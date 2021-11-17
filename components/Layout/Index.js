import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout = (props) => {
	const navigation = [
		{ name: "Inicio", href: "#inicio", current: false },
		{ name: "Nosotros", href: "#nosotros", current: false },
		{ name: "Identidades", href: "#identidades", current: false },
		{ name: "Marcas", href: "#marcas", current: false },
	];

	return (
		<>
			<Header navigation={navigation} />
			<div className="max-w-full m-auto overflow-hidden w-full">
				{props.children}
			</div>
			<Footer navigation={navigation} />
		</>
	);
};

export default Layout;
