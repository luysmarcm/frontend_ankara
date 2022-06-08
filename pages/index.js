import{Layout,
	SeoComponent,
    Banner,
    Nosotros,
    Identidades,
    NuestrasMarcas,
    NuestrosClientes,
    Ankara,
    VideoBanner, } from "components/index"

export default function Home() {
    return (
        <Layout>
            <SeoComponent
                title='Ankara'
                description='Desde hace 10 años despertamos tus sentidos con productos y accesorios de belleza para hombres y mujeres. Con presencia en más de 20 estados venezolanos nos hemos consolidado en el mercado nacional para brindarle bienestar y calidad a clientes mayoristas y al detal'
                image='/imagen/anka.png'
            />
            <main>
                <VideoBanner/>
                <Banner />
                <Nosotros />
                <Identidades />
                <NuestrasMarcas />
                <NuestrosClientes />
                {/* <Ankara /> */}
            </main>
        </Layout>
    );
}
