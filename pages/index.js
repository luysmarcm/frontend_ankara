import{Layout,
	SeoComponent } from "components/index"
import Nosotros from "components/Home/Nosotros";
import Aliados from "components/Home/Alidados";
import Marcas from "components/Home/Marcas";
import Identidades from "components/Home/Identidades";
import VideoBanner from "components/Home/VideoBanner";
import Ankara from "components/Home/Ankara/Ankara";
import Map from "components/Map";

export default function Home() {
    return (
			<Layout>
				<SeoComponent
					title="Ankara Venezuela"
					description="Desde hace 10 años despertamos tus sentidos con productos y accesorios de belleza para hombres y mujeres. Con presencia en más de 20 estados venezolanos nos hemos consolidado en el mercado nacional para brindarle bienestar y calidad a clientes mayoristas y al detal"
					image="/imagen/anka.png"
				/>
				<main>
					<VideoBanner />
					<Nosotros/>
					<Identidades />
					<Marcas/>
					<Aliados/>
					{/* <Ankara /> */}
				</main>
			</Layout>
		);
}

