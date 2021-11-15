
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
				description="Siéntete en confianza, segura y con mucha actitud en nuestro espacio exclusivo, donde nuestros profesionales te brindarán la mejor atención y calidad en cada uno de nuestros servicios."
				image="/imagen/logo.svg"
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
