import SeoComponent from "/components/SeoComponent";
import Layout from "/components/Layout/Index";
import HeadingPage from "components/HeadingPage";
import Breadcrumb from "components/Breadcrumb";
import Blog from "../../components/Blog/Blog";
import { gql, useQuery } from "@apollo/client";
import Pagination from "components/Pagination/Pagination";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import usePagination from "hooks/usePagination";
import Search from "components/Search";
import LoadingStores from "components/Tiendas/LoadingStores";
import BlogMenu from "components/Blog/BlogMenu";
import LoadingBlogs from "components/Blog/LoadingBlogs";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 drop-shadow-xl px-6 lg:px-16 mt-10">
          {error && (
            <div className="flex flex-col col-start-1 col-end-3 w-full p-10 lg:flex-row items-center mb-8">
              <div className="flex w-full flex-col">
                <div className="text-5xl relative z-30  bg-center lg:h-auto text-black text-center space-y-3 ">
                  Ha ocurrido un error, refresque la pagina
                </div>
              </div>
            </div>
          )}
          {loading && <LoadingBlogs />}
          {data && data.blogs.data.length === 0 && (
            <div className="flex flex-col col-start-1 col-end-3 w-full p-10 lg:flex-row items-center mb-11">
              <div className="flex w-full flex-col">
                <div className="p-20 text-3xl relative z-30  bg-center lg:h-auto text-black text-center space-y-3 ">
                  No se ha encontrado una coincidencia
                </div>
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

export default Blogs;
