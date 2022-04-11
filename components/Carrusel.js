import React, {useEffect, useState}from "react";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";


const Carrusel = ({ imagenes }) => {
	
	const [pause, setPause] = useState(false);
	const timer = React.useRef();
	const [sliderRef, slider] = useKeenSlider({
		loop: true,
		duration: 1000,
		dragStart: () => {
			setPause(true);
		},
		dragEnd: () => {
			setPause(false);
		},
	});

	useEffect(() => {
		sliderRef.current.addEventListener("mouseover", () => {
			setPause(true);
		});
		sliderRef.current.addEventListener("mouseout", () => {
			setPause(false);
		});
	}, [sliderRef]);

	useEffect(() => {
		timer.current = setInterval(() => {
			if (!pause && slider) {
				slider.next();
			}
		}, 8000);
		return () => {
			clearInterval(timer.current);
		};
	}, [pause, slider]);

	return (
		<div className="keen-slider">
			{imagenes.map((imagen) => (
				<div
					key={imagen.id}
					ref={sliderRef}
					className="bg-cover keen-slider__slide"
				>
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
