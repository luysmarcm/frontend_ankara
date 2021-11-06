import React from "react";
import Image from "next/image";
import Link from "next/link";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const Footer = ({ navigation }) => {
	return (
		<div className="text-gray-400 bg-black body-font">
			<div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
				<div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
					<div className="lg:w-1/3 md:w-1/2 w-full px-4">
						<div className="flex flex-col items-center justify-center space-y-3">
							<div className="flex flex-col justify-start space-y-5">
								<div className="x-auto flex flex-wrap flex-col justify-center lg:items-baseline">
									<Image
										src="/imagen/ankara.svg"
										alt="Logo"
										width={110}
										height={24}
										className="w-full"
									/>
								</div>

								<div className="flex justify-center lg:justify-between lg:items-baseline">
									{/* <Image
										src="/imagen/ico.png"	
										alt="Logo"
										width={24}
										height={24}
										className=""
									/> */}
									<h3 className="text-white text-sm w-2/3 font-lato">
										Ankara 2018 C.A. J-400149150 Edificio Industrial Los
										Hermanos Avenida Principal Los Cortijos De Lourdes Caracas.
									</h3>
								</div>
							</div>
						</div>
					</div>
					<div className="lg:w-1/3 md:w-1/2 w-full px-4">
						<div classNameName="flex flex-col items-center justify-center space-y-3">
							<div className="text-white text-2xl font-lato  italic">
								Nuestras Redes
							</div>

							<div className="flex space-x-3  ">
								<a
									target="_blank"
									href="https://www.instagram.com/ankaravenezuela/"
									rel="noopener noreferrer"
									className="text-primary text-5xl font-lato font-bold  "
								>
									<Image
										src="/imagen/ins.png"
										alt="Logo"
										width={24}
										height={24}
										className=""
									/>
								</a>

								<a
									target="_blank"
									href="https://www.tiktok.com/@ankaravenezuela?"
									rel="noopener noreferrer"
									className="text-primary text-5xl font-lato font-bold  "
								>
									<Image
										src="/imagen/tic.png"
										alt="Logo"
										width={24}
										height={24}
										className=""
									/>
								</a>
							</div>
						</div>
					</div>
					<div className="lg:w-1/3 md:w-1/2 w-full px-4">
						<div className="flex flex-col items-center justify-center space-y-3">
							<div className="text-white text-2xl font-lato italic">
								Navegacion
							</div>

							<ul className="grid grid-cols-2  text-2xl text-white ">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className={classNames(
											item.current
												? "bg-primary text-fondo"
												: "text-white hover:text-primary",
											"px-3 py-2 rounded-md text-sm font-lato font-bold"
										)}
										aria-current={item.current ? "page" : undefined}
									>
										{item.name}
									</a>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-black">
				<div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row sm:place-content-center">
					<p className="text-white text-base font-lato text-center sm:text-left">
						Copyright Ankara C.A.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
