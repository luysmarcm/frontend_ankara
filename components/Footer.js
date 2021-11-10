import React from "react";
import Image from "next/image";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const Footer = ({ navigation }) => {
	return (
		<footer className=" bg-black body-font">
			<div className="container px-10 py-10  flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-1 lg:justify-around space-y-3">
				<div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-left items-baseline space-y-10">
					<div className=" lg:w-1/3 md:w-1/2  ">
						<div className="flex flex-col  space-y-3">
							<div className="relative w-6/12 ">
								<Image
									src="/imagen/ankara.svg"
									alt="Logo"
									width={128}
									height={75}
									layout="responsive"
								/>
							</div>

							<div>
								<div className="absolute w-6/12">
									<Image
										src="/imagen/ico.png"
										alt="Logo"
										width={25}
										height={25}
									/>
								</div>
								<h3 className="text-white text-lg lg:text-sm translate-x-5 lg:translate-x-10 px-4  lg:w-8/12 font-lato">
									Ankara 2018 C.A. J-400149150
									{""} Edificio Industrial Los Hermanos Avenida Principal Los
									Cortijos De Lourdes Caracas.
								</h3>
							</div>
						</div>
					</div>
					<div className="lg:w-1/3 md:w-1/2 w-full ">
						<div className="flex flex-col justify-start items-center space-y-3">
							<div className="text-white text-3xl lg:text-2xl font-lato italic space-y-3">
								Nuestras Redes
							</div>

							<div className="flex space-x-3">
								<a
									target="_blank"
									href="https://www.instagram.com/ankaravenezuela/"
									rel="noopener noreferrer"
									className="text-primary text-5xl font-lato font-bold  "
								>
									<Image
										src="/imagen/ins.png"
										alt="Instagram"
										width={40}
										height={40}
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
										alt="Tik Tok"
										width={40}
										height={40}
										className=""
									/>
								</a>
							</div>
						</div>
					</div>
					<div className="lg:w-1/3 md:w-1/2 w-full ">
						<div className="flex flex-col justify-start items-center space-y-3">
							<div className="text-white text-3xl lg:text-2xl font-lato italic">
								Navegacion
							</div>

							<ul className="grid grid-cols-2  text-2xl text-white ">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="px-3 py-2 rounded-md text-xl lg:text-sm font-lato"
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
					<p className="text-white text-lg lg:text-base font-lato text-center sm:text-left">
						Copyright Ankara C.A.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
