import SeoComponent from "/components/SeoComponent";
import Layout from "/components/Layout/Index";
import HeadingPage from "components/HeadingPage";
import Breadcrumb from "components/Breadcrumb";
import Blog from "../../components/Blog/Blog";
import { OBTENER_BLOGS } from "query/query";
import { gql, useQuery } from "@apollo/client";
import Pagination from "components/Pagination/Pagination";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import usePagination from "hooks/usePagination";

const getPosts = gql`
  query getPosts($start: Int, $limit: Int, $filters: BlogFiltersInput) {
    blogs(pagination: { start: $start, limit: $limit }, filters: $filters) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
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
                url
                name
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

const Blogs = () => {
  const router = useRouter();
  const [filters, setFilters] = useState("");

  const {
    start,
    limit,
    page,
    paginas,
    setPaginas,
    setPage,
    nextPage,
    prevPage,
  } = usePagination("/blog");

  useEffect(() => {
    setPage(router.query.page ? parseInt(router.query.page) : 1);
  }, [router.query]);

  const { loading, error, data } = useQuery(getPosts, {
    variables: {
      limit,
      start: start,
      filters: {
        or: [
          { categorias_blog: { nombre: { containsi: filters } } },
          { titulo: { containsi: filters } },
        ],
      },
    },
    onCompleted: (data) => {
      setPaginas(Math.ceil(parseInt(data.blogs.meta.pagination.total) / limit));
    },
  });

  if (loading) return null;
  return (
    <Layout>
      <SeoComponent
        title="Ankara"
        description="Desde hace 10 años despertamos tus sentidos con productos y accesorios de belleza para hombres y mujeres. Con presencia en más de 20 estados venezolanos nos hemos consolidado en el mercado nacional para brindarle bienestar y calidad a clientes mayoristas y al detal"
        image="/imagen/anka.png"
      />
      <section>
        <HeadingPage titulo="Blog" />
        <div className="flex flex-col-2 place-content-between  px-6 lg:px-16 bg-white shadow-lg p-5">
          <Breadcrumb />
        </div>
        <Blog posts={data.blogs.data} search={filters} setSearch={setFilters} />
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

export default Blogs;
