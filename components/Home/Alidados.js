import CarruselClientes from "components/Card/CarruselClientes";

const clientes = [
	{
		id: 1,
		comentario:
			"Desde el momento que entras a ANKARA te das cuenta que más allá de solo vender maquillaje, te ofrecen a ti como cliente, una experiencia llena de empatía, buen servicio y sobre todo productos de calidad.",
		nombre: "Myriam Abreu",
		profesion: "Actriz - Miss Miranda 2007",
		imagen: "/imagen/Myriam_Abreu.png",
		redSocial: "barbieabreu",
	},
	{
		id: 2,
		comentario:
			"Es un lugar lleno de encanto por los productos que nos ofrecen, pero lo mejor su personal, dispuestos a atenderte. En Ankara la excelencia no es un acto es un hábito.",
		nombre: "Diana Patricia",
		profesion: "Bailarina - Bailaora - Actriz - Locutora",
		imagen: "/imagen/Diana_Patricia.png",
		redSocial: "lamacarenadelmundo",
	},
	{
		id: 3,
		comentario:
			"En Ankara encuentro todo lo necesario para maquillarme y peinarme previo a cada show de televisión, porque son distribuidores de los mejores cosméticos. Además, son la casa de la belleza en Venezuela.",
		nombre: "Maria Alexandra Bastidas",
		profesion: "Periodista",
		imagen: "/imagen/Maria_Alexandra_Bastidas.png",
		redSocial: "mabastidas",
	},
	{
		id: 4,
		comentario:
			"Simplemente mágico, único y verdadero. Amo a ANKARA Venezuela y ANKARA Studio.",
		nombre: "Ender Torres",
		profesion: "Maquillador Profesional",
		imagen: "/imagen/endertorres.png",
		redSocial: "endertorres3",
	},
	{
		id: 5,
		comentario:
			"Puedo definir a Ankara como ¡amor a primera vista! Para  Mí Anyela Galante, Ankara es una tienda donde encuentro todo lo que necesito y más. La calidad humana de los que allí trabajan es increíble. Es que siempre que voy, me provoca comprar de todo.",
		nombre: "Anyela Galante",
		profesion: "Animadora - Modelo - Actriz",
		imagen: "/imagen/Anyela_Galante.png",
		redSocial: "anyelagalantesalerno",
	},
];

const Aliados= () => {
	return (
		<section className="bg-rosado4 place-items-center px-3 py-20 md:py-32  md:px-16 lg:py-36 lg:px-20 ">
			<div className="pb-20 space-y-5">
				<div className="flex space-x-4 justify-center ">
					<div className="flex flex-col justify-center justify-items-center">
						<div className="relative z-20 text-3xl lg:text-5xl text-center font-pshoot text-opacity-80 text-gray-300 ">
							¿Qué dicen nuestros aliados?
							<figure className="absolute z-10 md:flex -translate-y-3">
								<div className="text-center">
									<h3>
										<span className="px-2 lg:px-14 first-letter:block notranslate text-center text-black font-lato text-4xl font-extrabold lg:text-5xl  ">
											¿Qué dicen nuestros aliados?
										</span>
									</h3>
								</div>
							</figure>
						</div>
					</div>
				</div>
			</div>
			<div className="lg:pt-24">
				<CarruselClientes clientes={clientes} />
			</div>
		</section>
	);
};

export default Aliados;
