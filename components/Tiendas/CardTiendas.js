import Image from 'next/image';
import React from 'react'

const CardTiendas = ({tienda}) => {

  const { nombre, ciudad, imagen, direccion } = tienda;
  return (
		<div className="bg-white rounded-xl overflow-hidden drop-shadow-xl flex flex-col flex-1 h-full">
			<div>
				<Image
					src={imagen}
					alt={nombre}
					width={750}
					height={500}
					layout="responsive"
					priority
					objectFit="cover"
					className="object-center"
					unoptimized
				/>
			</div>
			<div className=" text-black text-left p-5 space-y-2 ">
				<h2 className="tracking-wide text-sm lg:text-2xl font-bold capitalize">
					{nombre}
				</h2>
				<p>{ciudad}</p>
				<p className=" text-black text-opacity-75">{direccion}</p>
				{/* <Link href={`/catalogo/${url_key}`} passHref> */}
				<button className="rounded-md bg-rosado2 p-2 hover:bg-rosado hover:text-black">
					Visitar tienda
				</button>
				{/* </Link> */}
			</div>
		</div>
	);
}

export default CardTiendas