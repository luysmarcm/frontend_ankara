import React from 'react'
import Carrusel from './Carrusel';

const imagenes = [
	{
		id: 1,
		imagen: "/imagen/1.png",
	},
	{
		id: 2,
		imagen: "/imagen/2.png",
	},
	{
		id: 3,
		imagen: "/imagen/3.png",
	},
];

const Banner = () => {
    return (
			<div id="inicio" className="py-16 lg:py-0">
					<Carrusel  imagenes={imagenes} />		
			</div>
		);
}

export default Banner
