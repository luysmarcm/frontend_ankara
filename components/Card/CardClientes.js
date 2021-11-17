import React from 'react'
import Image from 'next/image';

const CardClientes = ({cliente}) => {

    const {nombre, comentario, imagen, profecion} = cliente
    return (
			<div className="bg-white bg-opacity-80 rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
				<div className="p-5 flex md:flex justify-center">
					<Image
						src={imagen}
						alt={nombre}
						width={100}
						height={100}
						className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0 justify-center"
					/>
				</div>
				<div className="p-4 lg:p-8">
					<p className="mt-2 text-black text-center text-1xl">{comentario}</p>
					<p className="mt-2 text-black text-center font-bold text-xl">
						{nombre}
					</p>
					<p className="mt-2 text-black text-opacity-60 text-center text-sm">
						{profecion}
					</p>
				</div>
			</div>
		);
}

export default CardClientes
