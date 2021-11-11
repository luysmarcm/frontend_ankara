import React from 'react'
import Image from 'next/image';

const CardIdentidades = ({identidad}) => {
    const {nombre, descripcion, imagen } = identidad;
    return (
			<div className="p-3 md:p-20 space-y-5">
				<div className="max-w-md mx-auto rounded-xl overflow-hidden md:max-w-5xl transition ease-in-out duration-300">
			<div className="md:flex flex-col relative">
				<div className='w-60 h-60 group relative overflow-hidden rounded-xl'>
                    <div className='absolute'>
                        <Image
                            src={imagen}
                            alt={nombre}
                            width={948}
                            height={604}
                        />
                    </div>
					<div className="absolute h-0 group-hover:h-auto transform transition  group-hover:-translate-y-3  duration-700 ease ease-out  text-black bottom-0 bg-white bg-opacity-80 space-y-3">
						<h2>{nombre}</h2>
						<span>{descripcion}</span>
					</div>
                </div>
					</div>
				</div>
			</div>
		);
}

export default CardIdentidades
