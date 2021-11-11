import React from "react";
import Image from "next/image";

const CardIdentidades = ({ identidad }) => {
	const { nombre, descripcion, imagen } = identidad;
	return (
		<div className="flex py-5 lg:py-20 justify-around">
			<div className="space-y-5 max-w-xs md:max-w-xs">
				<div className="relative h-44 w-96 imagen overflow-hidden rounded-xl">
					<div className="absolute">
						<Image
							src={imagen}
							alt={nombre}
							width={450}
							height={215}
							className="rounded-xl"
						/>
					</div>
					<div className="absolute text-black bottom-0 bg-white bg-opacity-90 hijo px-3 py-3 text-sm space-y-3 translate-y-3">
						<h2 className="text-black text-xl lg:text-1xl italic font-bold">
							{nombre}
						</h2>
						<p className="text-sm lg:text-sm">{descripcion}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardIdentidades;
