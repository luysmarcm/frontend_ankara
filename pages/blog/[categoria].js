import React from "react";
import { gql, useQuery } from "@apollo/client";
import client from "config/apollo-client";
import Blog from "../../components/Blog/Blog";
import SeoComponent from "./../../components/SeoComponent";
import HeadingPage from "components/HeadingPage";
import Breadcrumb from "./../../components/Breadcrumb";
import Layout from "./../../components/Layout/Index";
import Pagination from "components/Pagination/Pagination";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
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
  /* console.log(props, "props"); */
  const router = useRouter();
  const pathname = `/blog/${params.categoria}`;

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
      filters: { categorias_blog: { slug: { eq: params.categoria } } },
    },
    onCompleted: (data) => {
      setPaginas(Math.ceil(parseInt(data.blogs.meta.pagination.total) / limit));
    },
  });

  useEffect(() => {
    setPage(router.query.page ? parseInt(router.query.page) : 1);
  }, [router.query]);

  if (loading) return null;

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
        <Blog posts={data.blogs.data} />
        <Pagination
          page={page}
          nextPage={nextPage}
          prevPage={prevPage}
          paginas={paginas}
        />
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

  console.log(data);

  if (!data && error) {
    return {
      props: {
        statusCode: 500,
      },
    };
  }

  console.log(data, "GetStaticProps");

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

  console.log(data, "GetStaticPath");
  const paths = data.categoriasBlogs.data.map((categoria) => ({
    params: { categoria: categoria.attributes.slug },
  }));
  console.log(paths);
  return {
    paths,
    fallback: true,
  };
}
