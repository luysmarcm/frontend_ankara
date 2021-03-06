import client from "config/apollo-client";
import { gql } from "@apollo/client";
import {
	Layout,
	SeoComponent,
	Breadcrumb,
	HeadingPage,
	InfoTienda,
} from "components/index";

const Tienda = (props) => {

  if (props.statusCode) return <Error statusCode={500} />;
  const { tienda } = props;

  return (
    <Layout>
      <SeoComponent
        title={`Ankara | ${tienda.attributes.nombre}`}
        description={`${tienda.attributes.nombre}`}
        image="/imagen/anka.png"
      />
      <section>
        <HeadingPage titulo={`${tienda.attributes.nombre}`} />
        <div className="flex flex-row place-content-between  px-6 lg:px-16 bg-white shadow-lg p-5">
          <Breadcrumb />
          <div className="hidden md:block z-30">
          </div>
        </div>
        <InfoTienda tienda={tienda.attributes} />
      </section>
    </Layout>
  );
};

export default Tienda;

export async function getStaticProps({ params }) {
  const { data, error } = await client.query({
    query: gql`
      query getTienda($filters: TiendaFiltersInput) {
        tienda: tiendas(filters: $filters) {
          data {
            attributes {
              nombre
              ciudad
              coordenadas
              direccion
              telefono
              horario
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
    `,
    variables: {
      filters: { slug: { eq: params.tienda } },
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
			tienda: data.tienda.data[0],
		},
		revalidate: 86400,
	};
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query getTienda {
        tiendas {
          data {
            attributes {
              slug
              estado {
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
  const paths = data.tiendas.data.map((tienda) => ({
    params: {
      estado: tienda.attributes.estado.data.attributes.slug,
      tienda: tienda.attributes.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
