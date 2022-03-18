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
	query getTiendasEstados(
		$where: JSON
		$limit: Int
		$start: Int
		$count: JSON
	) {
		tiendas(limit: $limit, start: $start, where: $where) {
			id
			nombre
			direccion
			ciudad
			slug
			galeria {
				url
				formats
				width
				height
			}
			estado {
				slug
			}
		}
		tiendasCount(where: $count)
	}
`;



const Tiendas = (props) => {

	 const { estados, estado, params } = props;

		const router = useRouter();
		const [search, setSearch] = useState("");
		const pathname = `/tiendas/${params.estado}`;

		const {
			start,
			limit,
			page,
			paginas,
			setPaginas,
			setStart,
			setPage,
			nextPage,
			prevPage,
		} = usePagination(pathname);

		const { data, loading, error } = useQuery(getTiendasEstados, {
			variables: {
				count: {
					"estado.id": estado.id,
					// _or: [{ tienda_contains: search }, { ciudad_contains: search }],
				},
				where: {
					// _or: [{ tienda_contains: search }, { ciudad_contains: search }],
					estado: {
						id: estado.id,
					},
				},
				limit,
				start: start,
			},
			onCompleted: (data) => {
				setPaginas(Math.ceil(parseInt(data.tiendasCount) / limit));
			},
		});
		useEffect(() => {
			setPage(router.query.page ? parseInt(router.query.page) : 1);
		}, [router.query]);

		if(loading) return null;
	return (
		<Layout>
			<SeoComponent
				title={`Ankara| Tiendas en ${estado.nombre}`}
				description={`Tiendas en el estado ${estado.nombre}`}
				image="/imagen/anka.png"
			/>
			<section className="mt-24 md:mt-40 lg:mt-16">
				<HeadingTienda  estado={estado}/>
				
				<div className="flex flex-col-2 place-content-between  px-6 lg:px-16 bg-white shadow-lg p-5">
					<Breadcrumb />
					<div className="flex flex-row space-x-10">
						<Search />
						<Estados estados={estados} />
						{/* <EstadosDrop estados={estados} /> */}
					</div>
				</div>
				<GridTiendas tiendas={data.tiendas} />
			</section>
		</Layout>
	);
};

export default Tiendas;


export async function getStaticProps({ params, preview = null }) {
	const { data, error } = await client.query({
		query: gql`
			query getTiendasEstados($where: JSON) {
				# empresa {
				# 	Direccion
				# 	Correo
				# 	Telefono
				# 	Logo_header {
				# 		url
				# 		formats
				# 		width
				# 		height
				# 	}
				# 	Logo_footer {
				# 		url
				# 		formats
				# 		width
				# 		height
				# 	}
				# }
				estados(sort: "nombre:asc") {
					id
					nombre
					slug
				}
				estado: estados(limit: 1, where: $where) {
					id
					nombre
					slug
				}
			}
		`,
		variables: {
			where: {
				slug: params.estado,
			},
		},
	});

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
			estado: data.estado[0],
		},
		revalidate: 120,
	};
}

export async function getStaticPaths() {
	const { data } = await client.query({
		query: gql`
			query getTiendas {
				estados {
					slug
				}
			}
		`,
	});
	const paths = data.estados.map((estado) => ({
		params: { estado: estado.slug },
	}));
	return {
		paths,
		fallback: true,
	};
}
