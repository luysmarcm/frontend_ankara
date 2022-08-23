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
  const { tienda } = props;
  
  return (
    <Layout>
      <SeoComponent
        title={`Ankara Venezuela | ${tienda.tienda}`}
        description={`${tienda.tienda}`}
        image="/imagen/anka.png"
      />
      <section>
        <HeadingPage titulo={`${tienda.tienda}`} />
        <div className="flex flex-row place-content-between  px-6 lg:px-16 bg-white shadow-lg p-5">
          <Breadcrumb />
          <div className="hidden md:block z-30">
          </div>
        </div>
        <InfoTienda tienda={tienda} />
      </section>
    </Layout>
  );
};

export default Tienda;


export async function getStaticProps({ params }) {
	const { data, error } = await client.query({
		query: gql`
			query getTiendas($slug: String) {
				app {
					imagen_logo {
						url
						width
						height
					}
					link_apple
					link_android
				}
				empresa {
					Direccion
					Correo
					Telefono
					Logo_header {
						url
						formats
						width
						height
					}
					Logo_footer {
						url
						formats
						width
						height
					}
				}
				tienda: nuestrasTiendas(where: { slug: $slug }, limit: 1) {
					id
					tienda
					ciudad
					direccion
					telefono
					coordenadas
					horario
					slug
					identidades {
						id
						nombre
					}
					galeria {
						url
						formats
						width
						height
					}
					imagen360 {
						url
						formats
						width
						height
					}
					estado {
						slug
						texto
						imagen {
							url
							width
							height
						}
					}
				}
			}
		`,
		variables: {
			slug: params.tienda,
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
			tienda: data.tienda[0],
		},
		revalidate: 86400,
	};
}

export async function getStaticPaths() {
	const { data } = await client.query({
		query: gql`
			query getTiendas {
				tiendas: nuestrasTiendas {
					slug
					estado {
						slug
					}
				}
			}
		`,
	});
	const paths = data.tiendas.map((tienda) => ({
		params: { estado: tienda.estado.slug, tienda: tienda.slug },
	}));
	
	return {
		paths,
		fallback: false,
	};
}
