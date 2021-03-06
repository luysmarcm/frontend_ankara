import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import CardMisionVision from "./Card/CardMisionVision";

const nosotros = [
	{
		id: 1,
		titulo: "Nosotros",
		descripcion:
			"Desde hace 10 años despertamos tus sentidos con productos y accesorios de belleza para hombres y mujeres. Con presencia en más de 20 estados venezolanos nos hemos consolidado en el mercado nacional para brindarle bienestar y calidad a clientes mayoristas y al detal.",
		imagen: "/imagen/banner7.png",
	},
	{
		id: 2,
		titulo: "Misión",
		descripcion:
			"Ofrecer productos cosméticos de calidad para el bienestar, higiene y belleza integral de nuestros clientes. Así como también, guiarlos paso a paso a conocer el arte del maquillaje ofreciendo experiencias llenas de renovación, transformación y aprendizaje.",
		imagen: "/imagen/banner7.png",
	},
	{
		id: 3,
		titulo: "Visión",
		descripcion:
			"Ser referentes a nivel nacional en la distribución de productos cosméticos y de belleza, creando cambios que permitan el avance constante de todos nuestros clientes. Apostamos por desarrollar lazos de amistad, confianza y fidelidad que inspiren a cualquier persona o marca a sentirse seguros al momento de adquirir nuestros productos, prestando siempre una atención distintiva y de calidad.",
		imagen: "/imagen/banner7.png",
	},
];
const NosotrosCarrusel = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
	const [loaded, setLoaded] = useState(false);
	const [sliderRef, instanceRef] = useKeenSlider(
		{
			initial: 0,
			slideChanged(s) {
				setCurrentSlide(s.track.details.rel);
			},
			created() {
				setLoaded(true);
			},
			loop: true,
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
					}, 3000);
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
		<section id="NosotrosCarrusel" className="bg-black">
			<div ref={sliderRef} className="keen-slider">
				{nosotros.map((item) => (
					<div className="keen-slider__slide" key={item.id}>
						<CardMisionVision info={item} />
					</div>
				))}
			</div>
			{loaded && instanceRef.current && (
				<div className="grid grid-cols-3 relative w-11/12 bottom-6 gap-5 mx-auto">
					{[
						...Array(instanceRef.current.track.details.slides.length).keys(),
					].map((idx) => {
						return (
							<button
								key={idx}
								onClick={() => {
									instanceRef.current?.moveToIdx(idx);
								}}
								className={
									currentSlide === idx
										? "dot"
										: "bg-progress opacity-50 rounded-lg "
								}
							></button>
						);
					})}
				</div>
			)}
		</section>
	);
};

export default NosotrosCarrusel;