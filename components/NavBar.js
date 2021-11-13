// import {useRouter} from "next/router";
import { useState } from "react";
import Image from "next/image";
import Logo from "../public/imagen/logo.svg";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const NavBar = ({ navigation }) => {
	const [isSideMenuOpen, setisSideMenuOpen] = useState(false);

	const showSideMenu = () => {
		isSideMenuOpen ? setisSideMenuOpen(false) : setisSideMenuOpen(true);
	};
	// const router = useRouter();
	// console.log(router);
	return (
		<nav className="bg-black px-8 py-4 flex items-center justify-between fixed z-50 w-full">
			<div className="relative flex items-center justify-between w-full">
				<div style={{ width: "35px" }}>
					<Image src={Logo} alt="Logo" />
				</div>
				<div className="hidden lg:flex lg:flex-row space-x-4">
					{navigation.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="px-3 py-2 rounded-md text-md lg:text-lg text-white hover:text-primary"
							aria-current={item.current ? "page" : undefined}
						>
							{item.name}
						</a>
					))}
				</div>
				<button
					onClick={() => {
						showSideMenu();
					}}
					className="lg:hidden"
				>
					{isSideMenuOpen ? (
						<div className="w-8 h-8 px-2 text-white" alt="close">
							<div as="button">
								<svg
									style={{ width: "30px", height: "30px" }}
									viewBox="0 0 20 20"
								>
									<path
										fill="currentColor"
										d="M1,4 H18 V6 H1 V4 M1,9 H18 V11 H1 V7 M3,14 H18 V16 H1 V14"
									/>
								</svg>
							</div>
						</div>
					) : (
						<div className="w-8 h-8 px-2 text-white menu" alt="close">
							<div as="button">
								<svg
									style={{ width: "30px", height: "30px" }}
									viewBox="0 0 20 20"
								>
									<path
										fill="currentColor"
										d="M1,4 H18 V6 H1 V4 M1,9 H18 V11 H1 V7 M3,14 H18 V16 H1 V14"
									/>
								</svg>
							</div>
						</div>
					)}
				</button>
				{isSideMenuOpen ? (
					<div className="fixed w-full md:w-1/2 lg:hidden bg-black left-0 top-16">
						<ul className="flex flex-col p-10 text-2xl font-bold space-y-3">
							{navigation.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className="px-3 py-2 rounded-md text-md lg:text-lg text-white hover:text-primary"
									aria-current={item.current ? "page" : undefined}
								>
									{item.name}
								</a>
							))}
						</ul>
					</div>
				) : (
					""
				)}
			</div>
		</nav>
	);
};

export default NavBar;
