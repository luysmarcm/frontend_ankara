import CardValores from "components/Card/CardValores";
import HeadingPage from "components/HeadingPage";
import HeadingTienda from "components/HeadingPage";
import Layout from "components/Layout/Index";
import NosotrosVideoBanner from "components/NosotrosVideoBanner";
import SeoComponent from "components/SeoComponent";
import React from "react";
import NosotrosCarrusel from "./../components/NosotrosCarrusel";
import Valores from "components/Valores";

const valores = [
	{
		id: 1,
		titulo: "Evolucion",
	},
	{
		id: 2,
		titulo: "Familiaridad",
	},
	{
		id: 3,
		titulo: "Espiritualidad",
	},
	{
		id: 4,
		titulo: "Compromiso",
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
				<NosotrosVideoBanner />
				<NosotrosCarrusel valores={valores} />
				<Valores valores={valores} />
			</section>
		</Layout>
	);
};

export default nosotros;
