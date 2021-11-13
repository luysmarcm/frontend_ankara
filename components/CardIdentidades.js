import React from "react";
import Image from "next/image";

const CardIdentidades = ({ identidad }) => {
	const { nombre, descripcion, imagen } = identidad;
	return (
			<div className="relative imagen overflow-hidden rounded-xl">
				<div className="relative">
					<Image
						src={imagen}
						alt={nombre}
						width={450}
						height={215}
						layout="responsive"
					/>
				</div>
				<div className="absolute text-black bottom-0 bg-white bg-opacity-90 hijo px-3 py-3 text-sm space-y-3">
					<h2 className="text-black text-xl lg:text-1xl italic font-bold">
						{nombre}
					</h2>
					<p className="text-sm lg:text-sm">{descripcion}</p>
				</div>
			</div>
		
	);
};

export default CardIdentidades;
