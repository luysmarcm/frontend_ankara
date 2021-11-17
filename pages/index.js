
import Banner from "../components/Banner";
import Nosotros from "../components/Nosotros";
import SeoComponent from "../components/SeoComponent";
import Identidades from "../components/Identidades";
import NuestrasMarcas from "../components/NuestrasMarcas";
import NuestrosClientes from "../components/NuestrosClientes";
import Ankara from "../components/Ankara/Ankara.js"
import Layout from "../components/Layout/Index";


export default function Home() {
	return (
		<Layout>
			<SeoComponent
				title="Ankara"
				description="Desde hace 10 años despertamos tus sentidos con productos y accesorios de belleza para hombres y mujeres. Con presencia en más de 20 estados venezolanos nos hemos consolidado en el mercado nacional para brindarle bienestar y calidad a clientes mayoristas y al detal"
				image="/imagen/logo.png"
			/>
			<main>
				<Banner />
				<Nosotros />
				<Identidades />
				<NuestrasMarcas />
				<NuestrosClientes />
				<Ankara />
			</main>
		</Layout>
	);
}
