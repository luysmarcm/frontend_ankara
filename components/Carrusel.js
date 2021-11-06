import React, {useEffect, useState}from "react";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
//import "keen-slider/keen-slider.min.css";
// import "../styles/styles.css";


const Carrusel = ({ imagenes }) => {

	const {imagen} = imagenes

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
		<>
			<div ref={sliderRef} className="keen-slider">
				{imagenes.map((imagene) => (
					<div
						key={imagenes.id}
						className="bg-cover keen-slider__slide"
					>
						<Image
							src={imagene.imagen}
							alt="imagen"
							//objectFit="contain"
							layout="responsive"
							width={1024}
							height={480}
						/>
					</div>
				))}
			</div>

			{/* <div className="keen-slider__slide number-slide1">1</div>
			<div className="keen-slider__slide number-slide2">2</div>
			<div className="keen-slider__slide number-slide3">3</div>
			<div className="keen-slider__slide number-slide4">4</div>
			<div className="keen-slider__slide number-slide5">5</div>
			<div className="keen-slider__slide number-slide6"></div> */}
		</>
	);
};


export default Carrusel;
