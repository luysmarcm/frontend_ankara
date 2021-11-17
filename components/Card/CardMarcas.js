import React from "react";
import Image from "next/image";

const CardMarcas = ({ marca }) => {
	const { nombre, description, imagen } = marca;

	return (
		<section className="bg-morado rounded-xl lg:flex lg:even:flex-row-reverse overflow-hidden">
			<Image
				src={imagen}
				alt={nombre}
				width={804}
				height={827}
				// layout="responsive"
				objectFit="cover"
				priority
				className="relative md:w-3/12 w-11/12"
			/>

			<div className="p-6 md:p-14 lg:p-20 space-y-4 ">
				<h2 className="uppercase tracking-wide text-2xl lg:text-1xl md:text-3xl text-white text-center  font-bold lg:text-left">
					{nombre}
				</h2>
				<p className="mt-2 text-white text-base md:text-xl text-center lg:text-base lg:text-left">
					{description}
				</p>
			</div>
		</section>
	);
};

export default CardMarcas;
