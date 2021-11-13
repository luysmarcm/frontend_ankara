import React from 'react'
import Image from 'next/image';
import CardNosotros from "./CardNosotros";

const nosotros = [
	{
		id: 1,
		titulo: "Maquillaje",
		description:
			"Crea maquillajes de impacto con efecto duradero y resalta tus ojos con colores vibrantes y brillantes ideales para el día o la noche.",
		imagen: "/imagen/image1.png",
	},
	{
		id: 2,
		titulo: "Cuidado Personal",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut leo vitae nisi cursus vestibulum in vitae augue. ",
		imagen: "/imagen/image3.png",
	},
	{
		id: 3,
		titulo: "Barbershop	",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut leo vitae nisi cursus vestibulum in vitae augue. ",
		imagen: "/imagen/image4.png",
	},
	{
		id: 4,
		titulo: "Innovacion",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut leo vitae nisi cursus vestibulum in vitae augue.",
		imagen: "/imagen/image1.png",
	},
];

const Nosotros = () => {

	return (
		<section
			id="nosotros"
			className="place-items-center p-3 md:p-20 lg:py-32 pb-20"
		>
			<div className="flex justify-center pb-10 pt-10 ">
				<h1 className="text-primary text-6xl font-cd lg:text-7xl">
					Ankara{" "}
					<span className="font-lato text-5xl font-medium">
						es..
					</span>
				</h1>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-around ">
				{nosotros.map((item) => (
					<CardNosotros key={item.id} info={item} />
				))}
			</div>
		</section>
	);
};

export default Nosotros;
