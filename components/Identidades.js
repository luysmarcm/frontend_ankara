import CardIdentidades from "/components/Card/CardIdentidades";

const identidades = [
	{
		id: 1,
		nombre: "Ankara for me",
		descripcion:
			"Si un cambio de look es lo que necesitas, este es el lugar ideal para renovarte y dejarte consentir por profesionales que te harán sentir única/o. Ven y disfruta del espacio que tú mereces.",
		imagen: "/imagen/ankara4me.png",
	},
	{
		id: 2,
		nombre: "Ankara Studio",
		descripcion:
			"Certifícate como un/a profesional en el fascinante mundo del makeup junto a formadores que te capacitarán y brindarán todas las herramientas necesarias para convertir tu pasión en una profesión.",
		imagen: "/imagen/ankarastudio.png",
	},
];

const Identidades = () => {
    return (
			<section
				id="identidades"
				className=" place-items-center px-3 py-20 md:py-32  md:px-16 lg:py-36 lg:px-20 space-y-5"
			>
				<div className="pb-10 flex flex-col items-center space-y-5">
					<h2 className="text-black text-4xl lg:text-5xl font-extrabold italic">
						Identidades
					</h2>
					<p className="text-black text-lg md:text-xl lg:text-1xl text-center max-w-3xl">
						Durante una década nos hemos enfocado en brindarte la mejor
						experiencia, y ofrecerte variedad de productos de calidad que te
						llenarán de bienestar y realzarán tu belleza. ¡Conoce más de lo que
						en ANKARA tenemos para ti!
					</p>
				</div>
				<div className="grid grid-cols-1 gap-10">
					{identidades.map((identidad) => (
						<CardIdentidades key={identidad.id} identidad={identidad} />
					))}
				</div>
			</section>
		);
};

export default Identidades;
