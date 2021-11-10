import React from 'react'
import CardMarcas from './CardMarcas';


const marcas = [
	{
		id: 1,
		nombre: "AMELOW",
		description:
			"Siéntete en confianza, segura y con mucha actitud en nuestro espacio exclusivo, donde nuestros profesionales te brindarán la mejor atención y calidad en cada uno de nuestros servicios.",
		imagen: "/imagen/image9.png",
	},
	{
		id: 2,
		nombre: "AMELOW",
		description:
			"Siéntete en confianza, segura y con mucha actitud en nuestro espacio exclusivo, donde nuestros profesionales te brindarán la mejor atención y calidad en cada uno de nuestros servicios.",
		imagen: "/imagen/image9.png",
	},
];

const NuestrasMarcas = () => {
    return (
			<section id="marcas" className="p-3 md:p-20 lg:py-20 pb-20">
				<div className="p-10 flex flex-col items-center">
					<span className="text-black text-center text-3xl md:text-4xl lg:text-5xl font-lato font-bold ">
						Nuestras Marcas
					</span>
				</div>
				<div className="p-3 md:p-20 lg:p-32 flex justify-center overflow-hidden">
					<div className="w-full grid grid-cols-1 gap-5 even:grid-flow-col-dense rounded-xl">
						{marcas.map((marca) => (
							<CardMarcas key={marcas.id} marca={marca} />
						))}
					</div>
				</div>
			</section>
		);
}

export default NuestrasMarcas
