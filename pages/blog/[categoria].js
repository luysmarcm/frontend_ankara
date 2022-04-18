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
	DropDownBlog,
} from "components/index";
import usePagination from "hooks/usePagination";

const getPostCategoria = gql`
  query getPostCategoria($filters: BlogFiltersInput, $start: Int, $limit: Int) {
    blogs(filters: $filters, pagination: { start: $start, limit: $limit }) {
      meta {
        pagination {
          total
        }
      }
      data {
        attributes {
          titulo
          descripcion_corta
          descripcion_larga
          imagen_principal {
            data {
              attributes {
                name
                url
              }
            }
          }
          slug
          categorias_blog {
            data {
              attributes {
                nombre
                slug
              }
            }
          }
          fecha
        }
      }
    }
  }
`;

const Posts = (props) => {
  const { params } = props;
  const router = useRouter();
  const pathname = `/blog/${params.categoria}`;
  const [filters, setFilters] = useState("");

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

  const { data, loading, error } = useQuery(getPostCategoria, {
    variables: {
      limit,
      start: start,
      filters: {
        or: [
          {
            categorias_blog: { slug: { eq: params.categoria } },
            and: { titulo: { containsi: filters } },
          },
        ],
      },
    },
    onCompleted: (data) => {
      setPaginas(Math.ceil(parseInt(data.blogs.meta.pagination.total) / limit));
    },
  });

  useEffect(() => {
    setPage(router.query.page ? parseInt(router.query.page) : 1);
  }, [router.query]);

  return (
    <Layout>
      <SeoComponent
        title={`Ankara | Blog | Categoria ${params.categoria}`}
        description={`Post en la categoria ${params.categoria}`}
        image="/imagen/anka.png"
      />
      <section>
        <HeadingPage titulo={`${params.categoria}`} />
        <div className="flex flex-col-2 place-content-between px-6 lg:px-16 bg-white shadow-lg p-5">
          <Breadcrumb />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-8 gap-y-5 lg:gap-5 drop-shadow-xl px-6 lg:px-16 mt-10">
          <SearchMobile search={filters} setSearch={setFilters} />
          <DropDownBlog />
          {error && (
            <div className="block md:col-start-1 md:col-span-2 lg:col-end-7 w-full items-center mb-11 p-20">
                <div className="text-3xl z-30 text centertext-black text-center space-y-3 ">
                  <p className="text-center">Ha ocurrido un error, refresque la pagina</p>
              </div>
            </div>
          )}
          {loading && <LoadingBlogs />}
          {data && data.blogs.data.length === 0 && (
            <div className="block md:col-start-1 md:col-span-2 lg:col-end-7 w-full items-center mb-11 p-20">
                <div className="text-3xl z-30 text centertext-black text-center space-y-3 ">
                  <p className="text-center">No se ha encontrado una coincidencia</p>
              </div>
            </div>
          )}
          {data && data.blogs.data.length !== 0 && (
            <>
              <Blog posts={data.blogs.data} />
            </>
          )}

          <BlogMenu search={filters} setSearch={setFilters} />
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

export default Posts;

export async function getStaticProps({ params, preview = null }) {
  const { data, error } = await client.query({
    query: gql`
      query getPostCategoria($filters: CategoriasBlogFiltersInput) {
        categoriasBlogs(sort: "nombre:asc") {
          data {
            id
            attributes {
              nombre
              slug
            }
          }
        }

        categoria: categoriasBlogs(filters: $filters) {
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
      filters: { slug: { eq: params.post } },
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
      preview,
      ...data,
      categoria: data.categoria.data,
    },
    revalidate: 120,
  };
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query getPosts {
        categoriasBlogs {
          data {
            attributes {
              slug
            }
          }
        }
      }
    `,
  });

  const paths = data.categoriasBlogs.data.map((categoria) => ({
    params: { categoria: categoria.attributes.slug },
  }));
  return {
    paths,
    fallback: false,
  };
}
