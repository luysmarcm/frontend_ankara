import {
	Layout,
	SeoComponent,
	NosotrosVideoBanner,
	NosotrosCarrusel,
	Valores,
} from "components/index";

const valores = [
	{
		id: 1,
		titulo: "Evolucion",
		imagen: "/imagen/1.png",
		description: "",
	},
	{
		id: 2,
		titulo: "Familiaridad",
		imagen: "/imagen/1.png",
		description: "",
	},
	{
		id: 3,
		titulo: "Espiritualidad",
		imagen: "/imagen/1.png",
		description: "",
	},
	{
		id: 4,
		titulo: "Compromiso",
		imagen: "/imagen/1.png",
		description: "",
	},
	{
		id: 5,
		titulo: "Trabajo en equipo ",
		imagen: "/imagen/1.png",
		description: "",
	},
	{
		id: 6,
		titulo: "Oportunidad",
		imagen: "/imagen/1.png",
		description: "",
	},
];

const nosotros = () => {
	return (
		<Layout>
			<SeoComponent
				title="Ankara | Nosotros"
				description="Nosotros"
				image="/imagen/anka.png"
			/>
			<section>
				<NosotrosCarrusel/>
				<Valores valores={valores} />
			</section>
		</Layout>
	);
};

export default nosotros;
