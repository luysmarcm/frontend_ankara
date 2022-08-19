import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import CardClientes from "./CardClientes";
import CardValores from "./CardValores";

const CarruselValores = ({valores}) => {
        const [currentSlide, setCurrentSlide] = useState(0);
				const [loaded, setLoaded] = useState(false);
				const [sliderRef, instanceRef] = useKeenSlider({
					initial: 0,
					slideChanged(slider) {
						setCurrentSlide(slider.track.details.rel);
					},
					created() {
						setLoaded(true);
					},
					loop: true,
					mode: "free-snap",
					breakpoints: {
						"(min-width: 150px)": {
							slides: {
								perView: 1,
								spacing: 5,
							},
						},
						"(min-width: 768px)": {
							slides: {
								perView: 2,
								spacing: 15,
							},
						},
						"(min-width: 1024px)": {
							slides: {
								perView: 3,
								spacing: 15,
							},
						},
					},
					slides: {
						perView: 2,
						spacing: 15,
					},
				});
	return (
		<div className="navigation-wrapper ">
			<div
				ref={sliderRef}
				className="keen-slider grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
			>
				{valores.map((item) => (
					<div
						className="keen-slider__slide  pb-32 drop-shadow-xl"
						key={item.i}
					>
						<CardValores key={item.id} info={item} />
					</div>
				))}
			</div>
			{loaded && instanceRef.current && (
				<>
					<Arrow
						left
						onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
						disabled={currentSlide === 0}
					/>

					<Arrow
						onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
						disabled={
							currentSlide ===
							instanceRef.current.track.details.slides.length - 1
						}
					/>
				</>
			)}
		</div>
	);
};

export default CarruselValores;


function Arrow(props) {
	// const disabeld = props.disabled ? " arrow--disabled" : "";
	return (
		<svg
			onClick={props.onClick}
			className={`arrow ${props.left ? "arrow--left" : "arrow--right"}`}
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

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
	<path d="m13.707 4.707-1.414-1.414L3.586 12l8.707 8.707 1.414-1.414L6.414 12l7.293-7.293z" />
	<path d="m19.707 4.707-1.414-1.414L9.586 12l8.707 8.707 1.414-1.414L12.414 12l7.293-7.293z" />
</svg>;
