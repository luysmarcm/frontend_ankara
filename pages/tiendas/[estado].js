import Layout from "components/Layout/Index";
import SeoComponent from "components/SeoComponent";
import Breadcrumb from "components/Breadcrumb";
import Search from "components/Search";
import GridTiendas from "components/Tiendas/GridTiendas";
import HeadingTienda from "components/HeadingTienda";
import LoadingStores from "components/Tiendas/LoadingStores";

import { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import client from "config/apollo-client";
import usePagination from "hooks/usePagination";
import { useRouter } from "next/router";
import Pagination from "components/Pagination/Pagination";
import ListEstado from "components/Tiendas/ListEstado";
import DropDownEstadosMobile from "components/Tiendas/DropDownEstadosMobile";
import SearchMobile from "components/SearchMobile";

const getTiendasEstados = gql`
  query getTiendasEstados(
    $filters: TiendaFiltersInput
    $limit: Int
    $start: Int
  ) {
    tiendas(filters: $filters, pagination: { start: $start, limit: $limit }) {
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
          nombre
          ciudad
          coordenadas
          direccion
          telefono
          slug
          imagen {
            data {
              attributes {
                url
                name
              }
            }
          }
          estado {
            data {
              id
              attributes {
                nombre
                slug
              }
            }
          }
        }
      }
    }
  }
`;

const Tiendas = (props) => {
  const { estados, estado, params } = props;
  const router = useRouter();
  const [filters, setFilters] = useState("");
  const pathname = `/tiendas/${params.estado}`;

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

  useEffect(() => {
    setPage(router.query.page ? parseInt(router.query.page) : 1);
  }, [router.query]);

  const { data, loading, error } = useQuery(getTiendasEstados, {
    variables: {
      filters: {
        estado: { slug: { eq: params.estado } },
        or: [
          { nombre: { containsi: filters } },
          { estado: { nombre: { containsi: filters } } },
          { ciudad: { containsi: filters } },
          { direccion: { containsi: filters } },
        ],
      },
    },
    onCompleted: (data) => {
      setPaginas(
        Math.ceil(parseInt(data.tiendas.meta.pagination.total) / limit)
      );
    },
  });

  return (
    <Layout>
      <SeoComponent
        title={`Ankara | Tiendas en ${estado.attributes.nombre}`}
        description={`Tiendas en el estado ${estado.attributes.nombre}`}
        image="/imagen/anka.png"
      />
      <section>
        <HeadingTienda titulo={estado.attributes.nombre} />

        <div className="flex flex-col-2 place-content-between  px-6 lg:px-16 bg-white shadow-lg p-5">
          <Breadcrumb />
          <div className="flex flex-row space-x-10 h">
            <Search search={filters} setSearch={setFilters} />
          </div>
        </div>
        <div className="px-6 lg:px-16 my-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6  gap-y-5 md:gap-5">
          <SearchMobile search={filters} setSearch={setFilters} />
          <DropDownEstadosMobile estado={params.estado} />
          <ListEstado />
          {error && (
            <div className="block md:col-start-2 md:col-span-2 lg:col-end-7 w-full items-center mb-11 p-20">
                <div className="text-3xl z-30 text centertext-black text-center space-y-3 ">
                  <p className="text-center">Ha ocurrido un error, refresque la pagina</p>
              </div>
            </div>
          )}
          {loading && <LoadingStores />}
          {data && data.tiendas.data.length === 0 && (
            <div className="block md:col-start-2 md:col-span-2 lg:col-end-7 w-full items-center mb-11 p-20">
                <div className="text-3xl z-30 text centertext-black text-center space-y-3 ">
                  <p className="text-center">No se ha encontrado una coincidencia</p>
              </div>
            </div>
          )}
          {data && data.tiendas.data.length !== 0 && (
            <GridTiendas tiendas={data.tiendas.data} />
          )}
          {paginas > 1 ? (
            <div className="md:col-start-2 md:col-span-2 lg:col-start-2 lg:col-span-5 mt-8">
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

export default Tiendas;

export async function getStaticProps({ params, preview = null }) {
  const { data, error } = await client.query({
    query: gql`
      query getTiendasEstados($filters: EstadoFiltersInput) {
        estados(sort: "nombre:asc") {
          data {
            id
            attributes {
              nombre
              slug
            }
          }
        }

        estado: estados(filters: $filters) {
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
      filters: { slug: { eq: params.estado } },
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
      estado: data.estado.data[0],
    },
    revalidate: 120,
  };
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query getTiendas {
        estados {
          data {
            attributes {
              slug
            }
          }
        }
      }
    `,
  });
  const paths = data.estados.data.map((estado) => ({
    params: { estado: estado.attributes.slug },
  }));
  return {
    paths,
    fallback: false,
  };
}
