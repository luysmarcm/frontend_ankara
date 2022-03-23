import Layout from "components/Layout/Index";
import SeoComponent from "components/SeoComponent";
import Breadcrumb from "components/Breadcrumb";
import Search from "components/Search";
import Estados from "components/Estados";
import GridTiendas from "components/Tiendas/GridTiendas";
import HeadingTienda from "components/HeadingTienda";

import { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import client from "config/apollo-client";
import usePagination from "hooks/usePagination";
import { useRouter } from "next/router";
import EstadosDrop from "components/EstadoDrop";


const limit = 5;

const getTiendasEstados = gql`
	query getTiendasEstados($filters: TiendaFiltersInput) {
		tiendas(filters: $filters) {
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
	}
`;



const Tiendas = (props) => {

	 const { estados, estado, params } = props;

	 console.log(estado.attributes.nombre, "estado");
	//  console.log(estados, "estadossss");
	//  console.log(params.estado);

		// const router = useRouter();
		// const [search, setSearch] = useState("");
		// const pathname = `/tiendas/${params.estado}`;

		// const {
		// 	start,
		// 	limit,
		// 	page,
		// 	paginas,
		// 	setPaginas,
		// 	setStart,
		// 	setPage,
		// 	nextPage,
		// 	prevPage,
		// } = usePagination(pathname);

		const { data, loading, error } = useQuery(getTiendasEstados, {
			variables: {
				filters: { estado: { slug: { eq: params.estado} } },
			},
			// onCompleted: (data) => {
			// 	setPaginas(Math.ceil(parseInt(data.tiendasCount) / limit));
			// },
		});
		// useEffect(() => {
		// 	setPage(router.query.page ? parseInt(router.query.page) : 1);
		// }, [router.query]);

		if(loading) return null;

	//  console.log(data.tiendas.data, "adnabdk");
	// console.log(estado.attributes.nombre);
	return (
		<Layout>
			<SeoComponent
				title={`Ankara| Tiendas en ${estado.attributes.nombre}`}
				description={`Tiendas en el estado ${estado.attributes.nombre}`}
				image="/imagen/anka.png"
			/>
			<section className="mt-24 md:mt-40 lg:mt-16">
				{/* <HeadingTienda  estado={estado}/> */}

				<div className="flex flex-col-2 place-content-between  px-6 lg:px-16 bg-white shadow-lg p-5">
					<Breadcrumb />
					<div className="flex flex-row space-x-10 h">
						<Search />
						{/* <Estados estados={estados} /> */}
						{/* <EstadosDrop estados={estados} /> */}
					</div>
				</div>
				<GridTiendas tiendas={data.tiendas.data} />
			</section>
		</Layout>
	);
};

export default Tiendas;


export async function getStaticProps({ params, preview = null }) {
	const { data, error } = await client.query({
		query: gql`
			query getTiendasEstados($filters: EstadoFiltersInput) {
				estados(sort: "nombre:asc") {
					data {
						id
						attributes {
							nombre
							slug
						}
					}
				}

				estado: estados(filters: $filters) {
					data {
						id
						attributes {
							nombre
							slug
						}
					}
				}
			}
		`,
		variables: {
			filters: { slug: { eq: params.tienda } },
		},
	});

	console.log(data);

	if (!data && error) {
		return {
			props: {
				statusCode: 500,
			},
		};
	}

	console.log(data)

	return {
		props: {
			params,
			preview,
			...data,
			estado: data.estado.data[0],
		},
		revalidate: 120,
	};
}

export async function getStaticPaths() {
	const { data } = await client.query({
		query: gql`
			query getTiendas {
				estados {
					data {
						attributes {
							slug
						}
					}
				}
			}
		`,
	});

	// console.log(data);
	const paths = data.estados.data.map((estado) => ({
		params: { estado: estado.attributes.slug },
	}));
	console.log(paths);
	return {
		paths,
		fallback: true,
	};
}
