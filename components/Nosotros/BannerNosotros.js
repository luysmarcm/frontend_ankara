import React from 'react'
import Image from 'next/image';

const BannerNosotros = () => {
  return (
		<div className="grid grid-cols-1 lg:grid-cols-2 bg-rosado">
			<div className="p-10 py-20 lg:py-0 lg:px-20">
				<div className="flex space-y-5 lg:space-y-10 flex-col h-full justify-center items-center lg:items-start">
					<p className="text-center font-pshoot text-primary text-4xl lg:text-8xl">
						Somos
					</p>
					<p className="text-center  lg:translate-x-32 font-lato font-bold text-white text-5xl lg:text-9xl">
						ANKARA
					</p>
					<p className="text-center font-lato font-bold text-white text-md lg:text-xl ">
						Desde hace 10 años despertamos tus sentidos con productos y
						accesorios de belleza para hombres y mujeres. Con presencia en más
						de 20 estados venezolanos nos hemos consolidado en el mercado
						nacional para brindarle bienestar y calidad a clientes mayoristas y
						al detal.
					</p>
				</div>
			</div>

			<div className="w-3/4 translate-x-48 hidden md:hidden lg:block">
				<Image
					alt="..."
					src="/imagen/mujer2.png"
					// className="object-cover"
					layout="responsive"
					width={1419}
					height={1673}
				/>
			</div>
		</div>
	);
}

export default BannerNosotros