import { gql } from '@apollo/client';
import Breadcrumb from 'components/Breadcrumb'
import HeadingPage from 'components/HeadingPage';
import Layout from 'components/Layout/Index'
import SeoComponent from 'components/SeoComponent'
import InfoTienda from 'components/Tiendas/InfoTienda';
import client from 'config/apollo-client';


const Tienda = (props) => {

	const {tienda} = props

	return (
		<Layout>
			<SeoComponent
				title={`Ankara | ${tienda.nombre}`}
				description={`${tienda.nombre}`}
				image="/imagen/anka.png"
			/>
			<section className="mt-24 md:mt-40 lg:mt-16">
				<HeadingPage titulo={`${tienda.nombre}`} />
				<div className="flex flex-col place-content-between  px-6 lg:px-16 bg-white shadow-lg p-5">
					<Breadcrumb />
				</div>
				<InfoTienda tienda={tienda} />
			</section>
		</Layout>
	);
};

export default Tienda


export async function getStaticProps({ params }) {
	const { data, error } = await client.query({
		query: gql`
			query getTienda($slug: String) {
				tienda: tiendas(where: { slug: $slug }, limit: 1) {
					nombre
					ciudad
					telefono
					direccion
					horario
					coordenadas
					slug
					galeria {
						url
						formats
						width
						height
					}
					estado {
						nombre
						slug
					}
					identidades {
						nombre
						descripcion
					}
				}
				estados {
					id
					nombre
					slug
				}
			}
		`,
		variables: {
			slug: params.tienda,
		},
	});

	console.log(data, 'hola')
	return {
		props: {
			params,
			...data,
			tienda: data.tienda[0],
		},
		// revalidate: 120,
	};
}

export async function getStaticPaths() {
	const { data } = await client.query({
		query: gql`
			query getTiendas {
				tiendas{
					slug
					estado {
						slug
					}
				}
			}
		`,
	});
	const paths = data.tiendas.map((tienda) => ({
		params: { estado: tienda.estado.slug, tienda: tienda.slug },
	}));

	// console.log(paths);
	return {
		paths,
		fallback: true,
	};
}