import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout = (props) => {

	return (
		<>
			<Header/>
			<div className="max-w-max m-auto overflow-hidden w-full">
				{props.children}
			</div>
			<Footer />
		</>
	);
};

export default Layout;
