import CardValores from 'components/Card/CardValores';
import HeadingPage from 'components/HeadingPage';
import HeadingTienda from "components/HeadingPage";
import Layout from 'components/Layout/Index'
import MisionVision from 'components/MisionVision';
import SeoComponent from 'components/SeoComponent'
import React from 'react'
import NosotrosCarrusel from './../components/NosotrosCarrusel';

const valores = [
	{
		id: 1,
		titulo: "Evolucion",
		description:
			"Si de cuidar tu piel se trata, en ANKARA nos encargamos de brindarte productos de calidad para el cuerpo y el rostro. ¡Regálale suavidad y salud a tu piel con ANKARA!",
		imagen: "/imagen/maquillaje.jpg",
	},
	{
		id: 2,
		titulo: "Familiaridad",
		description:
			"Si de cuidar tu piel se trata, en ANKARA nos encargamos de brindarte productos de calidad para el cuerpo y el rostro. ¡Regálale suavidad y salud a tu piel con ANKARA!",
		imagen: "/imagen/maquillaje.jpg",
	},
	{
		id: 3,
		titulo: "Espiritualidad",
		description:
			"Si de cuidar tu piel se trata, en ANKARA nos encargamos de brindarte productos de calidad para el cuerpo y el rostro. ¡Regálale suavidad y salud a tu piel con ANKARA!",
		imagen: "/imagen/maquillaje.jpg",
	},
	{
		id: 4,
		titulo: "Compromiso",
		description:
			"Si de cuidar tu piel se trata, en ANKARA nos encargamos de brindarte productos de calidad para el cuerpo y el rostro. ¡Regálale suavidad y salud a tu piel con ANKARA!",
		imagen: "/imagen/maquillaje.jpg",
	},
	{
		id: 5,
		titulo: "Trabajo en equipo ",
		description:
			"Si de cuidar tu piel se trata, en ANKARA nos encargamos de brindarte productos de calidad para el cuerpo y el rostro. ¡Regálale suavidad y salud a tu piel con ANKARA!",
		imagen: "/imagen/maquillaje.jpg",
	},
	{
		id: 6,
		titulo: "Oportunidad",
		description:
			"Si de cuidar tu piel se trata, en ANKARA nos encargamos de brindarte productos de calidad para el cuerpo y el rostro. ¡Regálale suavidad y salud a tu piel con ANKARA!",
		imagen: "/imagen/maquillaje.jpg",
	},
];

const nosotros = () => {
  return (
		<Layout>
			<SeoComponent
				title="Ankara | Nosotros"
				description="Nosotros"
				image="/imagen/anka.png"
			/>
			<section>
		<HeadingPage titulo="Nosotros"/>
        <NosotrosCarrusel  />
        {/* <MisionVision /> */}
				<div className="bg-rosado bg-opacity-50"></div>
				<div className="bg-rosado2 bg-opacity-70  text-black place-items-center py-24 px-3 sm:px-16 md:py-32 lg:py-10 lg:px-20 space-y-5">
					<div className="pb-10 py-10 flex flex-col items-center space-y-5">
						<h2 className="text-black text-4xl lg:text-4xl  font-bold ">
							Valores
						</h2>
						<p className="text-black text-xl text-center max-w-3xl">
							Toda acción provoca una reacción, tal y como lo hacemos en Ankara
							ofreciendo asesoría, guía y productos de calidad para el cuidado
							de tu belleza; por eso nuestros valores forman la palabra EFECTO
							los cuales conforman el siguiente significado:
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  drop-shadow-xl pb-10 justify-around ">
						{valores.map((item) => (
							<CardValores key={item.id} info={item} />
						))}
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default nosotros