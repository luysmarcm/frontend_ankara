import Image from "next/image";

const marcas = [
	{
		id: 1,
		nombre: "AMELOW",
		description:
			"El lujo y el misticismo del color morado, el optimismo y la alegría del amarillo, se unieron para darle vida a Amelow, una marca sofisticada que te llenará de intensas emociones gracias a su amplia de esmaltes para uñas, y todo lo que necesitas para lucir una manicura y pedicura llena de glamour.",
		imagen: "/imagen/amelow.png",
	},
];

const amelow = [
	{ imagen: "/imagen/f1.png" },
	{ imagen: "/imagen/f2.png" },
	{ imagen: "/imagen/f3.png" },
	{ imagen: "/imagen/f4.png" },
];

const Marcas = () => {
	return (
		<section
			id="marcas"
			className="bg-white px-3 py-20 md:py-32  md:px-16 lg:py-36 lg:px-20  space-y-5"
		>
			<div className="flex space-x-4 justify-center ">
				<div className="flex flex-col justify-center justify-items-center">
					<div className="relative z-20 text-3xl lg:text-5xl text-center font-pshoot text-opacity-80 text-gray-200 ">
						Nuestras Marcas
						<figure className="absolute z-10 md:flex -translate-y-3">
							<div className="text-center">
								<h2>
									<span className="px-2 lg:px-10 first-letter:block notranslate text-center text-black font-lato text-4xl font-extrabold lg:text-5xl">
										Nuestras Marcas
									</span>
								</h2>
							</div>
						</figure>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mx-auto h-full pb-12 place-content-around pt-10 lg:pt-32 ">
				{amelow.map((i, index) => (
					<Image
						src={i.imagen}
						alt="Amelow"
						width={640}
						height={640}
						// layout="responsive"
						className="block object-center w-2/5 rounded-xl"
					/>
				))}
			</div>
			<div className="pb-10 flex flex-col items-center space-y-5">
				<h2 className="text-black text-4xl lg:text-5xl font-extrabold italic">
					<div className="">
						<Image
							src="/imagen/amelow3.png"
							alt="Amelow"
							width={440}
							height={110}
							// layout="responsive"
							className="block object-center w-2/5 rounded-xl"
						/>
					</div>
				</h2>
				<p className="text-black text-lg md:text-xl lg:text-1xl text-center max-w-3xl">
					El lujo y el misticismo del color morado, el optimismo y la alegría
					del amarillo, se unieron para darle vida a Amelow, una marca
					sofisticada que te llenará de intensas emociones gracias a su amplia
					de esmaltes para uñas, y todo lo que necesitas para lucir una manicura
					y pedicura llena de glamour.
				</p>
			</div>
			{/* <div className="w-full grid grid-cols-1 gap-5 even:grid-flow-col-dense rounded-xl">
					{marcas.map((marca) => (
						<CardMarcas key={marca.id} marca={marca} />
					))}
				</div> */}
		</section>
	);
};

export default Marcas;
