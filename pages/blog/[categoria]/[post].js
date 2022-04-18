
import { gql } from "@apollo/client";
import client from "config/apollo-client";
import {
	Layout,
	SeoComponent,
	HeadingPage,
	Breadcrumb,
	BlogPost,
} from "components/index";

const Post = (props) => {
  const { blog } = props;

  return (
    <Layout>
      <SeoComponent
        title="Ankara"
        description="Desde hace 10 años despertamos tus sentidos con productos y accesorios de belleza para hombres y mujeres. Con presencia en más de 20 estados venezolanos nos hemos consolidado en el mercado nacional para brindarle bienestar y calidad a clientes mayoristas y al detal"
        image="/imagen/anka.png"
      />
      <section>
        <HeadingPage titulo={`${blog.attributes.titulo}`} />
        <div className="flex flex-col-2 place-content-between px-6 lg:px-16 bg-white shadow-lg p-5">
          <Breadcrumb />
        </div>
        <BlogPost post={blog.attributes} />
      </section>
    </Layout>
  );
};

export default Post;

export async function getStaticProps({ params }) {
  const { data, error } = await client.query({
    query: gql`
      query getPost ($filters: BlogFiltersInput) {
        blog: blogs(filters: $filters) {
          data {
            attributes {
              titulo
              slug
              imagen_principal {
                data {
                  attributes {
                    url
                    name
                  }
                }
              }
              categorias_blog {
                data {
                  attributes {
                    nombre
                  }
                }
              }
              descripcion_corta
              descripcion_larga
              fecha
            }
          }
        }
        categoriasBlogs {
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
      filters: { slug: { eq: params.post } },
    },
  });
  
  return {
    props: {
      params,
      ...data,
      blog: data.blog.data[0],
    },
    revalidate: 86400, 
  };
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query getPost {
        blogs {
          data {
            attributes {
              slug
              categorias_blog {
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

  const paths = data.blogs.data.map((post) => ({
    params: {
      categoria: post.attributes.categorias_blog.data.attributes.slug,
      post: post.attributes.slug,
    },
  }));
  
  return { paths, fallback: false };
}
