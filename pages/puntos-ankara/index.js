import { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import client from "config/apollo-client";
import { useRouter } from "next/router";
import usePagination from "hooks/usePagination";
import {
	Layout,
	SeoComponent,
	Search,
  	Pagination,
	HeadingTienda,
	LoadingStores,
	ListEstado,
	DropDownEstadosMobile,
	SearchMobile,
	Breadcrumb,
} from "components/index";
import GridTiendas from "components/Tiendas/GridTiendas";

const getTiendas = gql`
	query tiendas($limit: Int, $start: Int, $search: String, $csearch: JSON) {
		tiendas: nuestrasTiendas(
			limit: $limit
			start: $start
			where: {
				_or: [
					{ tienda_contains: $search }
					{ ciudad_contains: $search }
					{ estado: { nombre_contains: $search } }
				]
			}
		) {
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
		tiendasCount(where: $csearch)
	}
`;
const Tiendas = (props) => {
    const { estados} = props;
	const router = useRouter();
	const [search, setSearch] = useState("");
	const {
		start,
		limit,
		page,
		paginas,
		setPaginas,
		setPage,
		nextPage,
		prevPage,
	} = usePagination("/puntos-ankara");

	useEffect(() => {
		setPage(router.query.page ? parseInt(router.query.page) : 1);
	}, [router.query]);

	const { data, loading, error } = useQuery(getTiendas, {
		variables: {
			search: search,
			limit,
			start: start,
			csearch: {
				_or: [
					{ tienda_contains: search },
					{ ciudad_contains: search },
					{ "estado.nombre_contains": search },
				],
			},
		},
		onCompleted: (data) => {
			setPaginas(Math.ceil(parseInt(data.tiendasCount) / limit));
		},
	});
  return (
		<Layout>
			<SeoComponent
				title="Ankara Venezuela | Puntos Ankara"
				description="Directorio de tiendas"
				image="/imagen/anka.png"
			/>
			<section>
				<HeadingTienda titulo="Puntos Ankara" />
				<div className="flex flex-col-2 place-content-between  px-6 lg:px-16 bg-white shadow-lg p-5">
					<Breadcrumb />
					<div className="flex flex-row space-x-10">
            <Search search={search} setSearch={setSearch}  />
          </div>
				</div>
				<div className="px-6 lg:px-16 my-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6  gap-y-5 md:gap-5">
					<SearchMobile search={search} setSearch={setSearch} />
					<DropDownEstadosMobile estados={estados} />
					<ListEstado estados={estados} />

					{error && (
						<div className="block md:col-start-2 md:col-span-2 lg:col-end-7 w-full items-center mb-11 p-20">
							<div className="text-3xl z-30 text center text-black text-center space-y-3 ">
								<p className="text-center">
									Ha ocurrido un error, refresque la pagina
								</p>
							</div>
						</div>
					)}
					{loading && <LoadingStores />}
					{data && data.tiendas.length === 0 && (
						<div className="block md:col-start-2 md:col-span-2 lg:col-end-7 w-full items-center mb-11 p-20">
							<div className="text-3xl z-30 text center text-black text-center space-y-3 ">
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
						<div className="col-span-2 md:col-start-2 lg:col-start-2 lg:col-span-5 mt-8">
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

export async function getStaticProps() {
	const { data, error } = await client.query({
		query: gql`
			query getTiendas {
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
			}
		`,
	});

	if (!data || error) {
		return {
			redirect: {
				destination: "/500",
				permanent: false,
			},
		};
	}
	return {
		props: {
			...data,
		},
		revalidate: 86400,
	};
}
export default Tiendas;



