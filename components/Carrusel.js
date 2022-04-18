import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";


const Carrusel = ({ imagenes }) => {
	const [sliderRef] = useKeenSlider(
		{
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
		<div ref={sliderRef} className="keen-slider">
			{imagenes.map((imagen) => (
				<div key={imagen.id} className="bg-cover keen-slider__slide">
					<div className="relative">
						<Image
							src={imagen.imagen}
							alt={imagen.alt}
							layout="responsive"
							width={1920}
							height={900}
						/>
					</div>
				</div>
			))}
		</div>
	);
};


export default Carrusel;
