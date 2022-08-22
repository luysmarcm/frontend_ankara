import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import client from "config/apollo-client";
import {	
  Layout,
	SeoComponent,
	HeadingPage,
	Breadcrumb,
	Pagination,
	Blog,
	BlogMenu,
	LoadingBlogs,
	SearchMobile,
	DropDownBlog,} from "components/index";
import usePagination from "hooks/usePagination";

const getPosts = gql`
	query getBlogs($limit: Int, $start: Int, $search: String, $csearch: JSON) {
		pubs: blogs(
			limit: $limit
			start: $start
			where: {
				_or: [
					{ titulo_contains: $search }
					{ slug_contains: $search }
					{ categorias_blog: { nombre_contains: $search } }
				]
			}
		) {
			_id
			published_at
			imagen_principal {
				url
				width
				height
			}
			titulo
			slug
			descripcion_corta
			descripcion_larga
			categorias_blog {
				nombre
        slug
			}
		}
		categorias: categoriasBlogs {
			_id
			slug
			nombre
			imagen {
				url
			}
		}
		blogsCount(where: $csearch)
	}
`;




const Blogs = ({ empresa, app, categorias, statusCode }) => {
	if (statusCode) return <Error statusCode={500} />;

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
	} = usePagination("/puntos-canguro");

	useEffect(() => {
		setPage(router.query.page ? parseInt(router.query.page) : 1);
	}, [router.query]);

	const { data, loading, error } = useQuery(getPosts, {
		variables: {
			search: search,
			limit,
			start: start,
			csearch: {
				_or: [
					{ titulo_contains: search },
					{ "categorias_blog.nombre_contains": search },
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
				title="Ankara Venezuela | Blog"
				description="Desde hace 10 años despertamos tus sentidos con productos y accesorios de belleza para hombres y mujeres. Con presencia en más de 20 estados venezolanos nos hemos consolidado en el mercado nacional para brindarle bienestar y calidad a clientes mayoristas y al detal"
				image="/imagen/anka.png"
			/>
			<section>
				<HeadingPage titulo="Blog" />
				<div className="flex flex-col-2 place-content-between  px-6 lg:px-16 bg-white shadow-lg p-5">
					<Breadcrumb />
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-5 lg:grid-cols-8 gap-y-5 lg:gap-5 drop-shadow-xl px-6 lg:px-16 mt-10">
					<SearchMobile search={search} setSearch={setSearch} />
					<DropDownBlog categorias={categorias} />
					{error && (
						<div className="block md:col-start-1 md:col-span-2 lg:col-end-7 w-full items-center mb-11 p-20">
							<div className="text-3xl z-30 text centertext-black text-center space-y-3 ">
								<p className="text-center">
									Ha ocurrido un error, refresque la pagina
								</p>
							</div>
						</div>
					)}
					{loading && <LoadingBlogs />}
					{data && data.pubs.length === 0 && (
						<div className="block md:col-start-1 md:col-span-2 lg:col-end-7 w-full items-center mb-11 p-20">
							<div className="text-3xl z-30 text centertext-black text-center space-y-3 ">
								<p className="text-center">
									No se ha encontrado una coincidencia
								</p>
							</div>
						</div>
					)}
					{data && data.pubs.length !== 0 && (
						<>
							<Blog posts={data.pubs} />
						</>
					)}

					<BlogMenu
						categorias={categorias}
						search={search}
						setSearch={setSearch}
					/>
				</div>
				{paginas > 1 ? (
					<Pagination
						page={page}
						nextPage={nextPage}
						prevPage={prevPage}
						paginas={paginas}
					/>
				) : null}
			</section>
		</Layout>
	);
};

export default Blogs;

export async function getStaticProps() {
	const { data, error } = await client.query({
		query: gql`
			query GetAllBlogs {
				categorias: categoriasBlogs(limit: 4) {
					_id
					slug
					nombre
					imagen {
						url
					}
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
		revalidate: 120,
	};
}