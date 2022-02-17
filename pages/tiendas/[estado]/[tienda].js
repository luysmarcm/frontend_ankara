import Breadcrumb from 'components/Breadcrumb'
import HeadingPage from 'components/HeadingPage';
import Layout from 'components/Layout/Index'
import SeoComponent from 'components/SeoComponent'
import InfoTienda from 'components/Tiendas/InfoTienda';


const Tienda = () => {
  return (
		<Layout>
			<SeoComponent
				title="Ankara | Tiendas"
				description="Directorio de tiendas"
				image="/imagen/anka.png"
			/>
			<section className="mt-24 md:mt-40 lg:mt-16">
				<HeadingPage titulo="C.C Cosmos Planta Baja" />
				<div className="flex flex-col place-content-between  px-6 lg:px-16 bg-white shadow-lg p-5">
					<Breadcrumb />
				</div>
				<InfoTienda />
			</section>
		</Layout>
	);
}

export default Tienda