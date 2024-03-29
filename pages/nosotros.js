import Valores from "components/Nosotros/Valores";
import { Layout, SeoComponent } from "components";
import NosotrosCarrusel from "components/Nosotros/NosotrosCarrusel";
import BannerNosotros from "components/Nosotros/BannerNosotros";

const valores = [
	{
		id: 1,
		titulo: "Evolucion",
		imagen: "/imagen/evolucion.png",
		description: "",
	},
	{
		id: 2,
		titulo: "Familiaridad",
		imagen: "/imagen/familiaridad.png",
		description: "",
	},
	{
		id: 3,
		titulo: "Espiritualidad",
		imagen: "/imagen/espiritu.png",
		description: "",
	},
	{
		id: 4,
		titulo: "Compromiso",
		imagen: "/imagen/compromiso.png",
		description: "",
	},
	{
		id: 5,
		titulo: "Trabajo en equipo ",
		imagen: "/imagen/trabajo-en-equipo.png",
		description: "",
	},
	{
		id: 6,
		titulo: "Oportunidad",
		imagen: "/imagen/oportunidad.png",
		description: "",
	},
];

const nosotros = () => {
	return (
		<Layout>
			<SeoComponent
				title="Ankara Venezuela | Nosotros"
				description="Nosotros"
				image="/imagen/anka.png"
			/>
			<section>
				<BannerNosotros/>
				<NosotrosCarrusel/>
				<Valores valores={valores} />
			</section>
		</Layout>
	);
};

export default nosotros;
