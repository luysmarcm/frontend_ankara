import Image from "next/image";

const CardIdentidades = ({ identidad }) => {
	const { nombre, descripcion, imagen } = identidad;
	return (
		<div className="relative imagen overflow-hidden rounded-xl">
			<div className="relative">
				<Image
					src={imagen}
					alt={nombre}
					width={460}
					height={200}
					layout="responsive"
				/>
			</div>
			<div className="absolute text-black bottom-0 bg-white bg-opacity-90 hijo px-3 py-3 text-sm space-y-3">
				<h2 className="text-black text-xl text-center md:text-2xl italic font-bold">
					{nombre}
				</h2>
				<p className="text-md md:text-lg text-center lg:px-32">{descripcion}</p>
			</div>
		</div>
	);
};

export default CardIdentidades;
