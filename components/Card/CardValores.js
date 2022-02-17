import React from "react";
import Image from "next/image";

const CardValores = ({ info }) => {
	const { titulo, imagen, description } = info;
	return (
		<div className="relative  imagen overflow-hidden rounded-xl space-y-5">
			<h2 className="text-black text-2xl lg:text-2xl italic font-bold">
				{titulo}
			</h2>
			<div className="relative">
				<Image
					src={imagen}
					alt={titulo}
					width={672}
					height={672}
					layout="responsive"
					className="rounded-xl"
					objectFit="cover"
				/>
			</div>
			<div className="absolute text-black bottom-0 bg-secundary bg-opacity-90 hijo px-3 py-2 text-md sm:text-lg">
				{description}
			</div>
		</div>
	);
};

export default CardValores;
