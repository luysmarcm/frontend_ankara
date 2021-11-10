import React from 'react'
import Image from 'next/image';

const CardIdentidades = ({identidad}) => {
    const {nombre, descripcion, imagen } = identidad;
    return (
			<div className="p-3 md:p-20 space-y-5">
				<div className="max-w-md mx-auto rounded-xl overflow-hidden md:max-w-2xl transition ease-in-out duration-300">
					<div className="md:flex flex-col relative">
						<figure class="group identidad">
							<div className="relative rounded-xl">
								<Image
									src={imagen}
									alt={nombre}
									width={630}
									height={320}
									className="rounded-xl"
								/>
							</div>
							<figcaption className="rounded-xl p-5 lg:p-10 space-y-4 text-center bg-white opacity-80 w-full hover:-translate-y-2 duration-700 ease-in-out ">
								<h2 className="text-black  group-hover:text-black text-center font-lato text-2xl lg:text-2xl  font-bold">
									{nombre}
								</h2>
								<p className="lg:text-sm text-sm">{descripcion}</p>
							</figcaption>
						</figure>
					</div>
				</div>
			</div>
		);
}

export default CardIdentidades
