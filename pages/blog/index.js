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
import BlogMenu from "components/Blog/BlogMenu";
import LoadingBlogs from "components/Blog/LoadingBlogs";
import SearchMobile from "components/SearchMobile";
import DropDownBlog from "components/Blog/DropdownBlog";

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
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-5 lg:grid-cols-8 gap-y-5 lg:gap-5 drop-shadow-xl px-6 lg:px-16 mt-10">
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

export default Blogs;
