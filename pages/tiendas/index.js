import Layout from 'components/Layout/Index'
import SeoComponent from 'components/SeoComponent'
import Breadcrumb from 'components/Breadcrumb';
import Search from 'components/Search';
import Estados from 'components/Estados';
import GridTiendas from 'components/Tiendas/GridTiendas';
import HeadingPage from 'components/HeadingPage';

const Tiendas = () => {
  return (
		<Layout>
			<SeoComponent
				title="Ankara | Tiendas"
				description="Directorio de tiendas"
				image="/imagen/anka.png"
			/>
			<section className="mt-24 md:mt-40 lg:mt-16">
        {/* <HeadingTienda/> */}
        <HeadingPage titulo="Tiendas"/>
				<div className="flex flex-col-2 place-content-between  px-6 lg:px-16 bg-white shadow-lg p-5">
					<Breadcrumb />
					<div className="flex flex-row space-x-10">
						<Search />
						<Estados />
					</div>
				</div>
				<GridTiendas />
			</section>
		</Layout>
	);
}

export default Tiendas