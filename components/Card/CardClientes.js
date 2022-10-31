import Image from "next/image";

const CardClientes = ({cliente}) => {
    const {nombre, comentario, imagen, profesion} = cliente;
    return (
			<div className="bg-rosado3 content bg-opacity-80 rounded-xl shadow-lg overflow-hidden md:max-w-2xl relative imagen">
				<div className="p-5 flex md:flex justify-center relative transition duration-500 transform hover:translate-y hover:scale-110">
					
						<Image
							src={imagen}
							alt={nombre}
							width={250}
							height={250}
							className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0 justify-center"
						/>
				</div>
				<div className="p-4 lg:p-8">
					<p className="mt-2 text-black text-center font-bold text-xl">
						{nombre}
					</p>
					<p className="mt-2 text-black text-opacity-60 text-center text-sm">
						{profesion}
					</p>
				</div>
				<div className="absolute text-black bottom-0 bg-rosado bg-opacity-90 hijo px-10 lg:px-3 py-20 lg:py-32 text-xl sm:text-lg text-center">
					{comentario}
				</div>
			</div>
		);
};

export default CardClientes;
