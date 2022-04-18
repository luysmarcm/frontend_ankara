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
			"Desde hace 10 años despertamos tus sentidos con productos y accesorios de belleza para hombres y mujeres. Con presencia en más de 20 estados venezolanos nos hemos consolidado en el mercado nacional para brindarle bienestar y calidad a clientes mayoristas y al detal.",
		imagen: "/imagen/banner7.png",
	},
	{
		id: 3,
		titulo: "Visión",
		descripcion:
			"Desde hace 10 años despertamos tus sentidos con productos y accesorios de belleza para hombres y mujeres. Con presencia en más de 20 estados venezolanos nos hemos consolidado en el mercado nacional para brindarle bienestar y calidad a clientes mayoristas y al detal.",
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
					}, 4500);
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

function Arrow(props) {
	const disabeld = props.disabled ? " arrow--disabled" : "";
	return (
		<svg
			onClick={props.onClick}
			className={`arrow ${
				props.left ? "arrow--left" : "arrow--right"
			} ${disabeld}`}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
		>
			{props.left && (
				<path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
			)}
			{!props.left && (
				<path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
			)}
		</svg>
	);
}