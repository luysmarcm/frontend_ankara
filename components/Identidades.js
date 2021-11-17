import React from "react";
import CardIdentidades from "../components/Card/CardIdentidades"

const identidades = [
	{
		id: 1,
		nombre: "Ankara Studio",
		descripcion:
			"Certifícate como un/a profesional en el fascinante mundo del makeup junto a formadores que te capacitarán y brindarán todas las herramientas necesarias para convertir tu pasión en una profesión.",
		imagen: "/imagen/studio.png",
	},
	{
		id: 2,
		nombre: "Ankara for me",
		descripcion:
			"Si un cambio de look es lo que necesitas, este es el lugar ideal para renovarte y dejarte consentir por profesionales que te harán sentir única/o. Ven y disfruta del espacio que tú mereces.",
		imagen: "/imagen/forme.png",
	},
];

const Identidades = () => {
	return (
		<section
			id="identidades"
			className=" bg-gris place-items-center p-3 md:p-20 lg:py-32 pb-20 lg:pb-32 lg:pt-32 space-y-5"
		>
			<div className="pb-10 p-3 flex flex-col items-center space-y-5 pt-10">
				<span className="text-black text-3xl md:text-4xl lg:text-5xl font-lato font-bold ">
					Identidades
				</span>
				<p className="text-black text-lg md:text-xl lg:text-1xl text-center lg:w-3/5">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the.
				</p>
			</div>
			<div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
					{identidades.map((identidad) => (
						<CardIdentidades key={identidad.id} identidad={identidad} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Identidades;
