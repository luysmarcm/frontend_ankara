import React from 'react'
import GalleryTienda from './GalleryTienda';

const InfoTienda = () => {
  return (
		<section className="px-6 py-10 lg:px-16">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
				{/* {media_gallery.length <= 0 ? (
					<Image
						src="/imagen/fondoimagen.png"
						alt={name}
						width={500}
						height={500}
						layout="responsive"
						priority
						objectFit="cover"
						className="rounded-md"
						unoptimized
					/>
				) : (
					<GalleryProducto producto={producto} />
				)} */}
				<GalleryTienda />

				<div className="flex flex-col space-y-4	 lg:space-y-6 text-black">
					<h2 className="text-black text-2xl lg:text-4xl font-bold">
						C.C. Cosmos Planta Baja
					</h2>
					<p className="font-bold text-sm lg:text-base">Direccion:</p>
					<p className=" text-sm lg:text-base">
						Calle 26 entre carreras 21 y 22 C.C Cosmos Piso 3
					</p>
					<p className="text-xl lg:text-3xl font-bold"></p>
					<div className=" w-full border-t-2 border-white" />
				</div>
			</div>
		</section>
	);
}

export default InfoTienda