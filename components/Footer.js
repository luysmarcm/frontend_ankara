import React from "react";
import Image from "next/image";

const Footer = ({navigation}) => {
    return (
			<footer className="bg-black body-font px-20 ">
				<div className="relative max-w-xs">
					<Image
						src="/imagen/ankara.svg"
						alt="Logo"
						width={60}
						height={30}
						layout="responsive"
						priority
					/>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-3 space-y-5 lg:space-y-0">
					<div className="flex">
						<div className="relative w-16 mr-4">
							<Image src="/imagen/ico.png" alt="Logo" width={50} height={50} />
						</div>
						<h3 className="text-white text-md lg:text-lg text-center lg:text-justify">
							Ankara 2018 C.A. J-400149150
							{""} Edificio Industrial Los Hermanos Avenida Principal Los
							Cortijos De Lourdes Caracas.
						</h3>
					</div>

					<div>
						<div className="text-white text-2xl lg:text-3xl italic mb-4 text-center">
							Nuestras Redes
						</div>

						<div className="flex  justify-center">
							<a
								target="_blank"
								href="https://www.instagram.com/ankaravenezuela/"
								rel="noopener noreferrer"
								className="text-primary  lg:text-5xl font-bold mr-4"
								rel="noopener"
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
								className="text-primary text-5xl  font-bold"
								rel="noopener"
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

					<div>
						<div className="text-white text-2xl lg:text-3xl italic text-center">
							Navegación
						</div>

						<ul className="grid grid-cols-1 place-items-center lg:place-content-start lg:grid-cols-2 text-xl lg:text-2xl text-white ">
							{navigation.map((item) => (
								<li key={item.name}>
									<a
										href={item.href}
										className="px-3 py-2 rounded-md text-md lg:text-lg text-white hover:text-primary"
										aria-current={item.current ? "page" : undefined}
									>
										{item.name}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="flex justify-center p-8 ">
					<span className="text-white text-lg text-center">
						Copyright Ankara C.A.
					</span>
				</div>
			</footer>
		);
};

export default Footer;
