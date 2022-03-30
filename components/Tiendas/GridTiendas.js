import React from 'react'
import CardTiendas from './CardTiendas'

const GridTiendas = ({tiendas}) => {


	console.log(tiendas);
  return (
		<div className="px-6 lg:px-16 my-10  grid grid-cols-3 gap-10 justify-around">
			{tiendas.map((tienda, i) => (
				<CardTiendas key={i} tienda={tienda} />
			))}
		</div>
	);
}

export default GridTiendas