import { gql } from '@apollo/client';
import Breadcrumb from 'components/Breadcrumb'
import HeadingPage from 'components/HeadingPage';
import Layout from 'components/Layout/Index'
import SeoComponent from 'components/SeoComponent'
import InfoTienda from 'components/Tiendas/InfoTienda';
import client from 'config/apollo-client';


const Tienda = (props) => {

	const {tienda} = props

	console.log(tienda.attributes);

	return (
		<Layout>
			<SeoComponent
				title={`Ankara | ${tienda.attributes.nombre}`}
				description={`${tienda.attributes.nombre}`}
				image="/imagen/anka.png"
			/>
			<section>
				<HeadingPage titulo={`${tienda.attributes.nombre}`} />
				<div className="flex flex-col place-content-between  px-6 lg:px-16 bg-white shadow-lg p-5">
					<Breadcrumb />
				</div>
				<InfoTienda tienda={tienda.attributes} />
			</section>
		</Layout>
	);
};

export default Tienda


export async function getStaticProps({ params }) {
	const { data, error } = await client.query({
		query: gql`
			query getTienda($filters: TiendaFiltersInput) {
				tienda: tiendas(filters: $filters) {
					data {
						attributes {
							nombre
							ciudad
							coordenadas
							direccion
							telefono
							slug
							imagen {
								data {
									attributes {
										url
										name
									}
								}
							}
							estado {
								data {
									id
									attributes {
										nombre
									}
								}
							}
						}
					}
				}
				estados {
					data {
						attributes {
							nombre
							slug
						}
					}
				}
			}
		`,
		variables: {
			filters: { slug: { eq:  params.tienda } } 
			// slug: params.tienda,
		},
	});

	console.log(data, 'hola')
	return {
		props: {
			params,
			...data,
			tienda: data.tienda.data[0],
		},
		// revalidate: 120,
	};
}

export async function getStaticPaths() {
	const { data } = await client.query({
		query: gql`
			query getTienda {
				tiendas {
					data {
						attributes {
							slug
							estado {
								data {
									attributes {
										slug
									}
								}
							}
						}
					}
				}
			}
		`,
	});
	const paths = data.tiendas.data.map((tienda) => ({
		params: {
			estado: tienda.attributes.estado.data.attributes.slug,
			tienda: tienda.attributes.slug,
		},
	}));

	console.log(paths);
	return {
		paths,
		fallback: true,
	};
}