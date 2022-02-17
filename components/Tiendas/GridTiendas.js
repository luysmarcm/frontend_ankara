import React from 'react'
import CardTiendas from './CardTiendas'

const tiendas = [
	{
		id: 1,
		nombre: "C.C. Cosmos Planta baja",
		ciudad: "Barquisimeto",
		telefono: "0424-2246726",
		imagen: "/imagen/cortijos.jpeg",
		direccion: "Calle 26 entre carreras 21 y 22 C.C Cosmos nivel PB",
		// galeria: [
		// 	{
		// 		url: "/imagen/cortijos.jpeg",
		// 		url: "/imagen/cortijos.jpeg",
		// 		url: "/imagen/cortijos.jpeg",
		// 		url: "/imagen/cortijos.jpeg",
		// 		url: "/imagen/cortijos.jpeg",
		// 	},
		// ],
		estado: "Distrito Capital",
	},
	{
		id: 2,
		nombre: "C.C. Cosmos Planta baja",
		ciudad: "Barquisimeto",
		telefono: "0424-2246726",
		imagen: "/imagen/cortijos.jpeg",
		direccion: "Calle 26 entre carreras 21 y 22 C.C Cosmos nivel PB",
		// galeria: [
		// 	{
		// 		url: "/imagen/cortijos.jpeg",
		// 		url: "/imagen/cortijos.jpeg",
		// 		url: "/imagen/cortijos.jpeg",
		// 		url: "/imagen/cortijos.jpeg",
		// 		url: "/imagen/cortijos.jpeg",
		// 	},
		// ],
		estado: "Distrito Capital",
	},
	{
		id: 3,
		nombre: "C.C. Cosmos Planta baja",
		ciudad: "Barquisimeto",
		telefono: "0424-2246726",
		imagen: "/imagen/cortijos.jpeg",
		direccion: "Calle 26 entre carreras 21 y 22 C.C Cosmos nivel PB",
		// galeria: [
		// 	{
		// 		url: "/imagen/cortijos.jpeg",
		// 		url: "/imagen/cortijos.jpeg",
		// 		url: "/imagen/cortijos.jpeg",
		// 		url: "/imagen/cortijos.jpeg",
		// 		url: "/imagen/cortijos.jpeg",
		// 	},
		// ],
		estado: "Distrito Capital",
	},
	{
		id: 4,
		nombre: "C.C. Cosmos Planta baja",
		ciudad: "Barquisimeto",
		telefono: "0424-2246726",
		imagen: "/imagen/cortijos.jpeg",
		direccion: "Calle 26 entre carreras 21 y 22 C.C Cosmos nivel PB",
		// galeria: [
		// 	{
		// 		url: "/imagen/cortijos.jpeg",
		// 		url: "/imagen/cortijos.jpeg",
		// 		url: "/imagen/cortijos.jpeg",
		// 		url: "/imagen/cortijos.jpeg",
		// 		url: "/imagen/cortijos.jpeg",
		// 	},
		// ],
		estado: "Distrito Capital",
	},
	{
		id: 5,
		nombre: "C.C. Cosmos Planta baja",
		ciudad: "Barquisimeto",
		telefono: "0424-2246726",
		imagen: "/imagen/cortijos.jpeg",
		direccion: "Calle 26 entre carreras 21 y 22 C.C Cosmos nivel PB",
		// galeria: [
		// 	{
		// 		url: "/imagen/cortijos.jpeg",
		// 		url: "/imagen/cortijos.jpeg",
		// 		url: "/imagen/cortijos.jpeg",
		// 		url: "/imagen/cortijos.jpeg",
		// 		url: "/imagen/cortijos.jpeg",
		// 	},
		// ],
		estado: "Distrito Capital",
	},
	{
		id: 6,
		nombre: "C.C. Cosmos Planta baja",
		ciudad: "Barquisimeto",
		telefono: "0424-2246726",
		imagen: "/imagen/cortijos.jpeg",
		direccion: "Calle 26 entre carreras 21 y 22 C.C Cosmos nivel PB",
		// galeria: [
		// 	{
		// 		url: "/imagen/cortijos.jpeg",
		// 		url: "/imagen/cortijos.jpeg",
		// 		url: "/imagen/cortijos.jpeg",
		// 		url: "/imagen/cortijos.jpeg",
		// 		url: "/imagen/cortijos.jpeg",
		// 	},
		// ],
		estado: "Distrito Capital",
	},
];

const GridTiendas = () => {
  return (
		<div className="px-6 lg:px-16 mt-10  grid grid-cols-3 gap-10 justify-around">
			{tiendas.map((tienda, i) => (
				<CardTiendas key={i} tienda={tienda} />
			))}
		</div>
	);
}

export default GridTiendas