import React from "react";
import CardMarcas from "./CardMarcas";

const marcas = [
	{
		id: 1,
		nombre: "AMELOW",
		description:
			"El lujo y el misticismo del color morado, el optimismo y la alegría del amarillo, se unieron para darle vida a Amelow, una marca sofisticada que te llenará de intensas emociones gracias a su amplia de esmaltes para uñas, y todo lo que necesitas para lucir una manicura y pedicura llena de glamour.",
		imagen: "/imagen/image9.png",
	},
];

const NuestrasMarcas = () => {
	return (
		<section id="marcas" className="p-3 md:p-20 lg:py-20 pb-20">
			<div className="pb-10 p-5 pt-10 lg:pt-0 flex flex-col items-center">
				<span className="text-black text-center text-3xl md:text-4xl lg:text-5xl font-lato font-bold ">
					Nuestras Marcas
				</span>
			</div>

			<div className="w-full grid grid-cols-1 gap-5 even:grid-flow-col-dense rounded-xl">
				{marcas.map((marca) => (
					<CardMarcas key={marca.id} marca={marca} />
				))}
			</div>
		</section>
	);
};

export default NuestrasMarcas;
