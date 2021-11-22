import React from 'react'
import Carrusel from './Carrusel';

const imagenes = [
	{
		id: 1,
		alt: "Tu belleza nos inspira",
		imagen: "/imagen/banner1.png",
	},
	{
		id: 2,
		alt: "Ankara for me",
		imagen: "/imagen/banner2.png",
	},
	// {
	// 	id: 3,
	// 	alt: "Convierte tu pasion, en una profecion",
	// 	imagen: "/imagen/3.png",
	// },
];

const Banner = () => {
    return (
			<section id="inicio" className="mt-16 lg:py-0">
					<Carrusel  imagenes={imagenes} />		
			</section>
		);
}

export default Banner
