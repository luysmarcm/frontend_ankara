import React from 'react'
import Image from 'next/image';

const CardIdentidades = ({identidad}) => {
    const {nombre, descripcion, imagen } = identidad;
    return (
			<div className="p-3 md:p-20 space-y-5">
				<div className="group hover:bg-white max-w-md mx-auto rounded-xl overflow-hidden md:max-w-2xl transition ease-in-out duration-300">
					<div className="md:flex relative">
						<Image
							src={imagen}
							alt="imagen"
							width={630}
							height={320}
							className="rounded-xl"
						/>
					</div>

					<div className="group p-10 space-y-3 -translate-y-6 overflow-hidden transition ease-in-out duration-300">
						<h2 className="text-gris  group-hover:text-black text-center font-lato text-2xl lg:text-2xl  font-bold">
							{nombre}
						</h2>
						<p className="hover:mt-2 hover:text-black hover:bg-white group-hover:text-gray-900 text-gris">
							{descripcion}
						</p>
					</div>
				</div>
			</div>
		);
}

export default CardIdentidades
