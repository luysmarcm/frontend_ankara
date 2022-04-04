import React from 'react'
import CardTiendas from './CardTiendas'

const GridTiendas = ({tiendas}) => {

  return (
		<div className="col-span-2 lg:col-span-5 ml-0 space-y-12 -z-50">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
			{tiendas.map((tienda, i) => (
				<CardTiendas key={i} tienda={tienda} />
			))}
			</div>
		</div>
	);
}

export default GridTiendas

{}