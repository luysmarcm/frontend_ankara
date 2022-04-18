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
	},
	{
		id: 2,
		titulo: "Familiaridad",
	},
	{
		id: 3,
		titulo: "Espiritualidad",
	},
	{
		id: 4,
		titulo: "Compromiso",
	},
	{
		id: 5,
		titulo: "Trabajo en equipo ",
	},
	{
		id: 6,
		titulo: "Oportunidad",
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
				<NosotrosVideoBanner />
				<NosotrosCarrusel/>
				<Valores valores={valores} />
			</section>
		</Layout>
	);
};

export default nosotros;
