import React from 'react'
import Image from 'next/image';
import CardNosotros from "./CardNosotros";

const nosotros = [
	{
		id: 1,
		titulo: "Color",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut leo vitae nisi cursus vestibulum in vitae augue. ",
		imagen: "/imagen/image2.png",
	},
	{
		id: 2,
		titulo: "Innovacion",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut leo vitae nisi cursus vestibulum in vitae augue. ",
		imagen: "/imagen/image3.png",
	},
	{
		id: 3,
		titulo: "Nuestra mision	",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut leo vitae nisi cursus vestibulum in vitae augue. ",
		imagen: "/imagen/image4.png",
	},
	{
		id: 4,
		titulo: "Seguridad",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut leo vitae nisi cursus vestibulum in vitae augue.",
		imagen: "/imagen/image1.png",
	},
];

const Nosotros = () => {

	return (
		<section id="nosotros" className="p-3 md:p-20 lg:py-20 pb-20">
			<div className="flex justify-center">
				<span className="text-primary text-4xl md:text-5xl lg:text-7xl font-cd ">
					Ankara{" "}
					<span className="text-primary text-5xl lg:text-6xl font-medium font-ps">
						es..
					</span>
				</span>
			</div>
			<div className="p-10 lg:p-14">
				<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
					{nosotros.map((nosotro) => (
						<CardNosotros key={nosotros.id} nosotro={nosotro} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Nosotros;
