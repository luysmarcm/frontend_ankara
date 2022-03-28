 import Layout from 'components/Layout/Index'
import SeoComponent from 'components/SeoComponent'
import Breadcrumb from 'components/Breadcrumb';
import Search from 'components/Search';
import Estados from 'components/Estados';
import GridTiendas from 'components/Tiendas/GridTiendas';
import HeadingTienda from "components/HeadingTienda";
import { OBTENER_TIENDAS } from 'query/query';
import { useQuery } from '@apollo/client';
import EstadosDrop from 'components/EstadoDrop';


const Tiendas = () => {

const { loading, error, data } = useQuery(OBTENER_TIENDAS);

if (loading) return null

  return (
		<Layout>
			<SeoComponent
				title="Ankara | Tiendas"
				description="Directorio de tiendas"
				image="/imagen/anka.png"
			/>
			<section>
				<HeadingTienda />
				<div className="flex flex-col-2 place-content-between  px-6 lg:px-16 bg-white shadow-lg p-5">
					<Breadcrumb />
					<div className="flex flex-row space-x-10">
						<Search />
						{/* <EstadosDrop estados={data.estados}/> */}
						{/* <Estados estados={data.estados} /> */}
					</div>
				</div>
				<GridTiendas tiendas={data.tiendas.data} />
			</section>
		</Layout>
	);
}

export default Tiendas