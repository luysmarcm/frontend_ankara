import {useKeenSlider} from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import CardClientes from "./Card/CardClientes";

const clientes = [
	{
		id: 1,
		comentario:
			"Desde el momento que entras a ANKARA te das cuenta que más allá de solo vender maquillaje, te ofrecen a ti como cliente, una experiencia llena de empatía, buen servicio y sobre todo productos de calidad.",
		nombre: "Myriam Abreu",
		profesion: "Actriz - Miss Miranda 2007",
		imagen: "/imagen/Myriam_Abreu.png",
		redSocial: "barbieabreu",
	},
	{
		id: 2,
		comentario:
			"Es un lugar lleno de encanto por los productos que nos ofrecen, pero lo mejor su personal, dispuestos a atenderte. En Ankara la excelencia no es un acto es un hábito.",
		nombre: "Diana Patricia",
		profesion: "Bailarina - Bailaora - Actriz - Locutora",
		imagen: "/imagen/Diana_Patricia.png",
		redSocial: "lamacarenadelmundo",
	},
	{
		id: 3,
		comentario:
			"En Ankara encuentro todo lo necesario para maquillarme y peinarme previo a cada show de televisión, porque son distribuidores de los mejores cosméticos. Además, son la casa de la belleza en Venezuela.",
		nombre: "Maria Alexandra Bastidas",
		profesion: "Periodista",
		imagen: "/imagen/Maria_Alexandra_Bastidas.png",
		redSocial: "mabastidas",
	},
	{
		id: 4,
		comentario:
			"Simplemente mágico, único y verdadero. Amo a ANKARA Venezuela y ANKARA Studio.",
		nombre: "Ender Torres",
		profesion: "Maquillador Profesional",
		imagen: "/imagen/endertorres.png",
		redSocial: "endertorres3",
	},
	{
		id: 5,
		comentario:
			"Puedo definir a Ankara como ¡amor a primera vista! Para  Mí Anyela Galante, Ankara es una tienda donde encuentro todo lo que necesito y más. La calidad humana de los que allí trabajan es increíble. Es que siempre que voy, me provoca comprar de todo.",
		nombre: "Anyela Galante",
		profesion: "Animadora - Modelo - Actriz",
		imagen: "/imagen/Anyela_Galante.png",
		redSocial: "anyelagalantesalerno",
	},
];

const NuestrosClientes = () => {

    const [sliderRef, slider] = useKeenSlider(
			{
				loop: true,
				breakpoints: {
					"(min-width: 120px)": {
						slides: { perView: 1, spacing: 5 },
					},
					"(min-width: 768px)": {
						slides: { perView: 2, spacing: 5 },
					},
					"(min-width: 1200px)": {
						slides: { perView: 3, spacing: 10 },
					},
				},
				slides: { perView: 1 },
			},
			[
				(slider) => {
					let timeout;
					let mouseOver = false;
					function clearNextTimeout() {
						clearTimeout(timeout);
					}
					function nextTimeout() {
						clearTimeout(timeout);
						if (mouseOver) return;
						timeout = setTimeout(() => {
							slider.next();
						}, 2000);
					}
					slider.on("created", () => {
						slider.container.addEventListener("mouseover", () => {
							mouseOver = true;
							clearNextTimeout();
						});
						slider.container.addEventListener("mouseout", () => {
							mouseOver = false;
							nextTimeout();
						});
						nextTimeout();
					});
					slider.on("dragStarted", clearNextTimeout);
					slider.on("animationEnded", nextTimeout);
					slider.on("updated", nextTimeout);
				},
			]
		);

    

    return (
			<section className="bg-fondo place-items-center px-3 py-20 md:py-32  md:px-16 lg:py-36 lg:px-20">
				<div className="pb-20 space-y-5">
					<h2 className="text-black italic text-center text-3xl md:text-4xl lg:text-5xl font-bold">
						¿Qué dicen nuestros aliados?
					</h2>
				</div>
				<div className="flex ">
					<div ref={sliderRef} className="keen-slider">
					{clientes.map((cliente) => (
						<div className="keen-slider__slide" key={cliente.id}>
							<CardClientes cliente={cliente} />
						</div>
					))}
					</div>
				</div>
			</section>
		);
};

export default NuestrosClientes;
