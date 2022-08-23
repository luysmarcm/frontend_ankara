import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { gql, useQuery } from "@apollo/client";
import client from "config/apollo-client";
import usePagination from "hooks/usePagination";
import {
	Layout,
	SeoComponent,
	Search,
	Pagination,
	GridTiendas,
	HeadingTienda,
	LoadingStores,
	ListEstado,
	DropDownEstadosMobile,
	SearchMobile,
	Breadcrumb,
} from "components/index";

const getTiendasEstados = gql`
	query getTiendasEstados(
		$where: JSON
		$limit: Int
		$start: Int
		$count: JSON
	) {
		tiendas: nuestrasTiendas(limit: $limit, start: $start, where: $where) {
			id
			tienda
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
  if (!props.params) return <ErrorPage statusCode={404} />;
	const { estados, estado, empresa, app, params } = props;
	const router = useRouter();
	const [search, setSearch] = useState("");
	const pathname = `/puntos-canguro/${params.estado}`;
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
				_or: [{ tienda_contains: search }, { ciudad_contains: search }],
			},
			where: {
				_or: [{ tienda_contains: search }, { ciudad_contains: search }],
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


  return (
		<Layout>
			<SeoComponent
				title={`Ankara Venezuela | Tiendas en ${estado.nombre}`}
				description={`Tiendas en el estado ${estado.nombre}`}
				image="/imagen/anka.png"
			/>
			<section>
				<HeadingTienda titulo={estado.nombre} />
				<div className="flex flex-col-2 place-content-between  px-6 lg:px-16 bg-white shadow-lg p-5">
					<Breadcrumb />
					<div className="flex flex-row space-x-10 h">
						<Search search={search} setSearch={setSearch} />
					</div>
				</div>
				<div className="px-6 lg:px-16 my-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6  gap-y-5 md:gap-5">
					<SearchMobile search={search} setSearch={setSearch} />
					<DropDownEstadosMobile estados={estados} />
					<ListEstado estados={estados} />
					{error && (
						<div className="block md:col-start-2 md:col-span-2 lg:col-end-7 w-full items-center mb-11 p-20">
							<div className="text-3xl z-30 text centertext-black text-center space-y-3 ">
								<p className="text-center">
									Ha ocurrido un error, refresque la pagina
								</p>
							</div>
						</div>
					)}
					{loading && <LoadingStores />}
					{data && data.tiendas.length === 0 && (
						<div className="block md:col-start-2 md:col-span-2 lg:col-end-7 w-full items-center mb-11 p-20">
							<div className="text-3xl z-30 text centertext-black text-center space-y-3 ">
								<p className="text-center">
									No se ha encontrado una coincidencia
								</p>
							</div>
						</div>
					)}
					{data && data.tiendas.length !== 0 && (
						<GridTiendas tiendas={data.tiendas} />
					)}
					{paginas > 1 ? (
						<div className="md:col-start-2 md:col-span-2 lg:col-start-2 lg:col-span-5 mt-8">
							<Pagination
								page={page}
								nextPage={nextPage}
								prevPage={prevPage}
								paginas={paginas}
							/>
						</div>
					) : null}
				</div>
			</section>
		</Layout>
	);
};

export default Tiendas;

export async function getStaticProps({ params }) {
	const { data, error } = await client.query({
		query: gql`
			query getTiendasEstados($where: JSON) {
				app {
					imagen_logo {
						url
						width
						height
					}
					link_apple
					link_android
				}
				empresa {
					Direccion
					Correo
					Telefono
					Logo_header {
						url
						formats
						width
						height
					}
					Logo_footer {
						url
						formats
						width
						height
					}
				}
				estados(sort: "nombre:asc") {
					id
					nombre
					slug
				}
				estado: estados(limit: 1, where: $where) {
					id
					nombre
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

	return {
		props: {
			params,
			...data,
			estado: data.estado[0],
		},
		revalidate: 86400,
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
		fallback: false,
	};
}
