
import { gql} from "@apollo/client";
import client from "config/apollo-client";
import {
	Layout,
	SeoComponent,
	HeadingPage,
	Breadcrumb,
	BlogPost,
} from "components/index";

const Post = ({ post, categorias }) => {
	const blog = post;
	return (
		<Layout>
			<SeoComponent
				title={`Ankara Venezuela | ${blog.titulo}`}
				description={`${blog.descripcion_corta}`}
				image={`${blog.imagen_principal.url}`}
			/>
			<section>
				<HeadingPage titulo={`${blog.titulo}`} />
				<div className="flex flex-col-2 place-content-between px-6 lg:px-16 bg-white shadow-lg p-5">
					<Breadcrumb />
				</div>
				<BlogPost post={blog} categorias={categorias} />
			</section>
		</Layout>
	);
};

export default Post;

export async function getStaticProps({ params }) {
	const { data, error } = await client.query({
		query: gql`
			query getTiendas($slug: String) {
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
				categorias: categoriasBlogs {
					_id
					slug
					nombre
					imagen {
						url
					}
				}
				post: blogs(where: { slug: $slug }, limit: 1) {
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
		`,
		variables: {
			slug: params.post,
		},
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
			params,
			...data,
			post: data.post[0],
		},
		revalidate: 86400,
	};
}

export async function getStaticPaths() {
	const { data } = await client.query({
		query: gql`
			query getTiendas {
				posts: blogs {
					slug
					categorias_blog {
						slug
					}
				}
			}
		`,
	});
	const paths = data.posts.map((post) => ({
		params: { categoria: post.categorias_blog.slug, post: post.slug },
	}));

	return {
		paths,
		fallback: false,
	};
}
