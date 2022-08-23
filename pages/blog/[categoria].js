import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import client from "config/apollo-client";
import ErrorPage from "next/error";
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
	DropDownBlog,
} from "components/index";

const getPostCategoria = gql`
	query getBlogCategorias($slug: String, $search: String) {
		blogsCount
		categoriaBlog: categoriasBlogs(where: { slug: $slug }, limit: 1) {
			nombre
			slug
			imagen {
				url
			}
			blogs(where: { titulo_contains: $search }) {
				_id
				published_at
				imagen_principal {
					url
				}
				titulo
				slug
				categorias_blog {
					nombre
					slug
				}
				descripcion_corta
				descripcion_larga
			}
		}
	}
`;

const Posts = (props) => {

  if (props.statusCode) return <ErrorPage statusCode={500} />;
  const {empresa, app, categoria, categorias, params } = props
  const [search, setSearch] = useState("");
  const { data, loading, error } = useQuery(getPostCategoria, {
		variables: {
			slug: params.categoria,
			search: search
		},
	});
	return (
		<Layout>
			<SeoComponent
				title={`Ankara Venezuela | Blog | Categoria ${params.categoria}`}
				description={`Post en la categoria ${params.categoria}`}
				image="/imagen/anka.png"
			/>
			<section>
				<HeadingPage titulo={`${params.categoria}`} />
				<div className="flex flex-col-2 place-content-between px-6 lg:px-16 bg-white shadow-lg p-5">
					<Breadcrumb categorias={categorias} />
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-8 gap-y-5 lg:gap-5 drop-shadow-xl px-6 lg:px-16 mt-10">
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
					{data && data.categoriaBlog[0].blogs.length === 0 && (
						<div className="block md:col-start-1 md:col-span-2 lg:col-end-7 w-full items-center mb-11 p-20">
							<div className="text-3xl z-30 text centertext-black text-center space-y-3 ">
								<p className="text-center text-black">
									No se ha encontrado una coincidencia
								</p>
							</div>
						</div>
					)}
					{data && data.categoriaBlog[0].blogs.length !== 0 && (
						<>
							<Blog posts={data.categoriaBlog[0].blogs} />
						</>
					)}

					<BlogMenu
						categorias={categorias}
						search={search}
						setSearch={setSearch}
					/>
				</div>
				{/* {paginas > 1 ? (
					<Pagination
						page={page}
						nextPage={nextPage}
						prevPage={prevPage}
						paginas={paginas}
					/>
				) : null} */}
			</section>
		</Layout>
	);
};

export default Posts;


export async function getStaticProps({ params, preview = null }) {
	const { data, error } = await client.query({
		query: gql`
			query OnlyCategory($slug: String) {
				empresa {
					Logo_header {
						url
						width
						height
					}
					Logo_footer {
						formats
						url
						width
						height
					}
					Direccion
					Telefono
					Correo
				}
				app {
					link_apple
					link_android
					imagen_logo {
						url
						width
						height
					}
				}
				categoria: categoriasBlogs(where: { slug: $slug }, limit: 1) {
					nombre
					slug
					imagen {
						url
					}
					blogs {
						_id
						published_at
						imagen_principal {
							url
						}
						titulo
						slug
						categorias_blog {
							nombre
							slug
						}
						descripcion_corta
						descripcion_larga
					}
				}
				categorias: categoriasBlogs{
          nombre
          slug
        }
			}
		`,
		variables: {
			slug: params.categoria,
		},
	});
	if (!data && error) {
		return {
			redirect: {
				destination: "/500",
				permanent: false,
			},
		};
	}
	return {
		props: {
			params,
			...data,
			categoria: data.categoria[0],
		},
		revalidate: 86400,
	};
}

export async function getStaticPaths() {
	const { data } = await client.query({
		query: gql`
			query SlugCategories {
				categorias: categoriasBlogs {
					slug
				}
			}
		`,
	});

	const paths = data.categorias.map((categoria) => ({
		params: { categoria: categoria.slug },
	}));

	return { paths, fallback: false };
}
