import CardTiendas from "./CardTiendas";

const GridTiendas = ({ tiendas }) => {
	return (
		<div className="col-span-2 lg:col-span-5 ml-0 space-y-12">
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				{tiendas.map((tienda) => (
					<CardTiendas key={tienda.id} tienda={tienda} />
				))}
			</div>
		</div>
	);
};

export default GridTiendas;
