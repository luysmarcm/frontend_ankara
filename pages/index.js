import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import Nosotros from "../components/Nosotros";
import SeoComponent from "../components/SeoComponent";
import Identidades from "../components/Identidades";
import NuestrasMarcas from "../components/NuestrasMarcas";
import NuestrosClientes from "../components/NuestrosClientes";
import Footer from "../components/Footer";
import Ankara from "../components/Ankara";


export default function Home() {

	const navigation = [
		{ name: "Inicio", href: "#inicio", current: false },
		{ name: "Nosotros", href: "#nosotros", current: false },
		{ name: "Identidades", href: "#identidades", current: false },
		{ name: "Marcas", href: "#marcas", current: false },
	];


	return (
		<div>
			<SeoComponent
				title="Ankara"
				description="Siéntete en confianza, segura y con mucha actitud en nuestro espacio exclusivo, donde nuestros profesionales te brindarán la mejor atención y calidad en cada uno de nuestros servicios."
			/>
			<header>
				<NavBar navigation={navigation} />
				<Banner />
			</header>
			<main>
				<Nosotros />
				<Identidades />
				<NuestrasMarcas />
				<NuestrosClientes />
				<Ankara />
			</main>

			<footer>
				<Footer navigation={navigation} />
			</footer>
		</div>
	);
}
