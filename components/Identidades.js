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
				className="bg-rosado4 place-items-center px-3 py-20 md:py-32  md:px-16 lg:py-36 lg:px-20 space-y-5"
			>
				<div className="pb-10 flex flex-col items-center space-y-5">
					{/* <h2 className="text-black text-4xl lg:text-5xl font-extrabold italic">
						Identidades
					</h2> */}
					<div className="flex space-x-4 justify-center ">
						<div className="flex flex-col justify-center justify-items-center">
							<div className="relative z-20 text-4xl lg:text-6xl text-center font-pshoot text-opacity-80 text-gray-300 ">
								Identidades
								<figure className="absolute z-10 md:flex  -translate-y-5 lg:-translate-y-6">
									<div className="text-center">
										<h3>
											<span className="px-3 lg:px-11 first-letter:block notranslate text-center text-black font-lato text-4xl font-extrabold lg:text-5xl  ">
												Identidades
											</span>
										</h3>
									</div>
								</figure>
							</div>
						</div>
					</div>
					<p className="text-black text-lg md:text-xl lg:text-1xl text-center max-w-3xl pt-24">
						Durante una década nos hemos enfocado en brindarte la mejor
						experiencia, y ofrecerte variedad de productos de calidad que te
						llenarán de bienestar y realzarán tu belleza. ¡Conoce más de lo que
						en ANKARA tenemos para ti!
					</p>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
					{identidades.map((identidad) => (
						<CardIdentidades key={identidad.id} identidad={identidad} />
					))}
				</div>
			</section>
		);
};

export default Identidades;
