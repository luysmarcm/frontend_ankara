import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    title: "Inicio",
    path: "/",
  },
  {
    title: "Nosotros",
    path: "/nosotros",
  },
  {
    title: "Puntos Ankara",
    path: "/puntos-ankara",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const NavBar = () => {
  const [isSideMenuOpen, setisSideMenuOpen] = useState(false);

  const showSideMenu = () => {
    setisSideMenuOpen(!isSideMenuOpen);
  };
  return (
		<nav className="bg-black px-8 py-4 flex items-center justify-between w-full">
			<div className="relative flex items-center justify-between w-full">
				<Link href="/" passHref>
					<div style={{ width: "35px" }}>
						<Image src="/imagen/logo.png" alt="Logo" width="176" height="167" />
					</div>
				</Link>
				<div className="hidden lg:flex lg:flex-row space-x-4">
					{links.map((item) => (
						<a
							key={item.title}
							href={item.path}
							className="px-3 py-2 rounded-md text-md lg:text-lg text-white hover:text-primary"
							// aria-current={item.current ? "page" : undefined}
						>
							{item.title}
						</a>
					))}
				</div>
				<button
					aria-label="Abrir menu"
					onClick={() => {
						showSideMenu();
					}}
					className="lg:hidden w-8 h-8 rounded-xl overflow-hidden text-white"
				>
					<svg style={{ width: "100%", height: "100%" }} viewBox="0 0 20 20">
						<path
							fill="currentColor"
							d="M1,4 H18 V6 H1 V4 M1,9 H18 V11 H1 V7 M3,14 H18 V16 H1 V14"
						/>
					</svg>
				</button>

				<div
					className={`transition-all duration-500 ease-in-out fixed w-full lg:hidden bg-black left-0 top-16 overflow-hidden  ${
						isSideMenuOpen ? "h-auto" : "h-0"
					}`}
				>
					<ul className="flex flex-col p-10 text-2xl space-y-3">
						{links.map((item) => (
							<li key={item.title}>
								<a
									href={item.path}
									className="px-3 py-2 rounded-md text-md lg:text-lg text-white hover:text-primary"
									// aria-current={item.current ? "page" : undefined}
								>
									{item.title}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
