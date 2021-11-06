import React from "react";
import CardIdentidades from "./CardIdentidades";

const identidades = [
	{
		id: 1,
		nombre: "Ankara Studio",
		descripcion:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut leo vitae nisi cursus vestibulum in vitae augue.",
		imagen: "/imagen/studio.png",
	},
	{
		id: 2,
		nombre: "Ankara for me",
		descripcion:
			"Siéntete en confianza, segura y con mucha actitud en nuestro espacio exclusivo, donde nuestros profesionales te brindarán la mejor atención y calidad en cada uno de nuestros servicios.",
		imagen: "/imagen/forme.png",
	},
];

const Identidades = () => {
	// const {nombre, descripcion, imagen} = identidades

	return (
		<section
			id="identidades"
			className=" bg-gris place-items-center p-3 md:p-20 lg:py-20"
		>
			<div className="p-5 flex flex-col items-center space-y-10 ">
				<span className="text-black text-3xl md:text-4xl lg:text-5xl font-lato font-bold ">
					Identidades
				</span>
				<p className="text-black text-sm md:text-xl lg:text-1xl text-center lg:w-3/5">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the.
				</p>
			</div>
			<div>
				<div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 overflow-hidden justify-items-center ">
					{identidades.map((identidad) => (
							<CardIdentidades key={identidades.id} identidad={identidad} />
						))}

				
				</div>
			</div>
		</section>
	);
};

export default Identidades;
