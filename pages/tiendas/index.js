import Layout from "components/Layout/Index";
import SeoComponent from "components/SeoComponent";
import Breadcrumb from "components/Breadcrumb";
import Search from "components/Search";
import GridTiendas from "components/Tiendas/GridTiendas";
import HeadingTienda from "components/HeadingTienda";
import { gql, useQuery } from "@apollo/client";
import Pagination from "components/Pagination/Pagination";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import usePagination from "hooks/usePagination";
import LoadingStores from "./../../components/Tiendas/LoadingStores";
import Estados from "components/Estados";
import ListEstado from "components/Tiendas/ListEstado";

import DropDownEstadosMobile from "components/Tiendas/DropDownEstadosMobile";
import SearchMobile from "components/SearchMobile";

const getTiendas = gql`
  query getTiendas($limit: Int, $start: Int, $filters: TiendaFiltersInput) {
    tiendas(pagination: { start: $start, limit: $limit }, filters: $filters) {
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
              attributes {
                nombre
                slug
              }
            }
          }
        }
      }
    }
    estados {
      data {
        attributes {
          nombre
          slug
        }
      }
    }
  }
`;

const Tiendas = () => {
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
  } = usePagination("/tiendas");

  useEffect(() => {
    setPage(router.query.page ? parseInt(router.query.page) : 1);
  }, [router.query]);

  const { loading, error, data } = useQuery(getTiendas, {
    variables: {
      limit,
      start: start,
      filters: {
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
        title="Ankara | Tiendas"
        description="Directorio de tiendas"
        image="/imagen/anka.png"
      />
      <section>
        <HeadingTienda titulo="Tiendas" />
        <div className="flex flex-col-2 place-content-between  px-6 lg:px-16 bg-white shadow-lg p-5">
          <Breadcrumb />
          <div className="flex flex-row space-x-10">
            <Search search={filters} setSearch={setFilters} />
          </div>
        </div>
        <div className="px-6 lg:px-16 my-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6  gap-y-5 md:gap-5">
          <SearchMobile search={filters} setSearch={setFilters} />
          <DropDownEstadosMobile />
          <ListEstado />

          {error && (
            <div className="block md:col-start-2 md:col-span-2 lg:col-end-7 w-full items-center mb-11 p-20">
              <div className="text-3xl z-30 text center text-black text-center space-y-3 ">
                <p className="text-center">
                  Ha ocurrido un error, refresque la pagina
                </p>
              </div>
            </div>
          )}
          {loading && <LoadingStores />}
          {data && data.tiendas.data.length === 0 && (
            <div className="block md:col-start-2 md:col-span-2 lg:col-end-7 w-full items-center mb-11 p-20">
              <div className="text-3xl z-30 text center text-black text-center space-y-3 ">
                <p className="text-center">
                  No se ha encontrado una coincidencia
                </p>
              </div>
            </div>
          )}
          {data && data.tiendas.data.length !== 0 && (
            <GridTiendas tiendas={data.tiendas.data} />
          )}
          {paginas > 1 ? (
            <div className="col-span-2 md:col-start-2 lg:col-start-2 lg:col-span-5 mt-8">
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
