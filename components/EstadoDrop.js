import { useState } from "react";
import Link from "next/link";

const EstadosDrop = ({estados}) => {

	const [isSideMenuOpen, setisSideMenuOpen] = useState(false);
	console.log(estados, "sjkdbkja")
	const showSideMenu = () => {
		setisSideMenuOpen(!isSideMenuOpen);
	};

	return (
	<>
					<button
						aria-label="Abrir menu"
						onClick={() => {
							showSideMenu();
						}}
						className="appearance-none
									px-3
									block
									w-full 
									h-full
									text-base
									font-normal
									text-black
									bg-rosado bg-clip-padding bg-no-repeat
									border border-solid border-gray-300
									rounded
									transition
									ease-in-out
									relative "
					>
						Estados
						{/* <svg
							className="w-4 h-4 ml-2"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M19 9l-7 7-7-7"
							/>
						</svg> */}
					</button>

					<div
						className={`transition-all duration-500 absolute  bg-white   overflow-hidden z-10 rounded-lg rounded-t-none ${
							isSideMenuOpen ? "h-auto" : "h-0"
						}`}
					>
						<ul className="flex flex-col p-5 rounded-lg text-2xl space-y-2">
							{estados.map((estado, i) => (
								<li key={i}>
									<Link href={`/tiendas/${estado.slug}`} passHref>
										<a className="block text-base text-black">
											{estado.nombre}
										</a>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</>
	);
};

export default EstadosDrop;


