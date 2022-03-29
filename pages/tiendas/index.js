import Layout from "components/Layout/Index";
import SeoComponent from "components/SeoComponent";
import Breadcrumb from "components/Breadcrumb";
import Search from "components/Search";
import Estados from "components/Estados";
import GridTiendas from "components/Tiendas/GridTiendas";
import HeadingTienda from "components/HeadingTienda";
import { OBTENER_TIENDAS } from "query/query";
import { gql, useQuery } from "@apollo/client";
import Pagination from "components/Pagination/Pagination";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import usePagination from "hooks/usePagination";

const getTiendas = gql`
  query getTiendas($limit: Int, $start: Int) {
    tiendas(pagination: { start: $start, limit: $limit }) {
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
    },
    onCompleted: (data) => {
      setPaginas(
        Math.ceil(parseInt(data.tiendas.meta.pagination.total) / limit)
      );
    },
  });

  if (loading) return null;

  return (
    <Layout>
      <SeoComponent
        title="Ankara | Tiendas"
        description="Directorio de tiendas"
        image="/imagen/anka.png"
      />
      <section>
        <HeadingTienda />
        <div className="flex flex-col-2 place-content-between  px-6 lg:px-16 bg-white shadow-lg p-5">
          <Breadcrumb />
          <div className="flex flex-row space-x-10">
            <Search />
            {/* <EstadosDrop estados={data.estados}/> */}
            {/* <Estados estados={data.estados} /> */}
          </div>
        </div>
        <GridTiendas tiendas={data.tiendas.data} />
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

export default Tiendas;
