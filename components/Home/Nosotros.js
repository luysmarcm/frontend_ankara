import NosotrosCard from "components/Card/NosotrosCard";

const nosotros = [
	{
		id: 1,
		titulo: "MAKE UP",
		description:
			"Variedad, calidad y mucho brillo encontrarás en Ankara. Encuentra tus productos de maquillaje favoritos y prepárate para realzar tu belleza.",
		imagen: "/imagen/makeup.png",
	},
	{
		id: 2,
		titulo: "Skin Care",
		description:
			"Si de cuidar tu piel se trata, en ANKARA nos encargamos de brindarte productos de calidad para el cuerpo y el rostro. ¡Regálale suavidad y salud a tu piel con ANKARA!",
		imagen: "/imagen/skincare-1.png",
	},
	{
		id: 3,
		titulo: "Barbershop	",
		description:
			"Para ellos, que aman cuidar su imagen, ofrecemos productos y accesorios para el cuidado de la barba y el cabello, ¡porque ellos, lo merecen!",
		imagen: "/imagen/barbershop2.png",
	},
	{
		id: 4,
		titulo: "Aparatos estéticos ",
		description:
			"Te ayudamos a innovar tu Spa o emprendimiento con aparatos de última generación para los diferentes tratamientos estéticos.",
		imagen: "/imagen/aparatos.png",
	},
];

const Nosotros = () => {
	return (
		<section
			id="nosotros"
			className="bg-white place-items-center py-24 px-3 sm:px-16 md:py-32 lg:py-36 lg:px-20 space-y-5"
		>
			<div className="flex space-x-4 justify-center ">
				<div className="flex flex-col justify-center justify-items-center">
					<div className="relative z-20 text-4xl lg:text-6xl text-center font-pshoot text-opacity-50 text-gray-200 ">
						Ankara es
						<figure className="absolute z-10 md:flex -translate-y-5 lg:-translate-y-8">
							<div className="text-center">
								<h3>
									<span className="px-6 lg:px-16 first-letter:block notranslate text-center text-black font-lato text-4xl font-extrabold lg:text-5xl  ">
										Ankara es
									</span>
								</h3>
							</div>
						</figure>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-40 lg:gap-10 justify-between drop-shadow-xl pb-10 lg:pb-0 pt-24">
				{nosotros.map((item) => (
					<NosotrosCard key={item.id} info={item} />
				))}
			</div>
		</section>
	);
};

export default Nosotros;
