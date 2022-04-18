import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import CardMisionVision from "./Card/CardMisionVision";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

// const images = [
//   "/imagen/banner7.png",
//   "/imagen/banner7.png",
//   "/imagen/banner7.png",
// ];

// const titulo = ["Nosotros", "Misión", "Visión"];

// const descripcion = [
//   "Desde hace 10 años despertamos tus sentidos con productos y accesorios de belleza para hombres y mujeres. Con presencia en más de 20 estados venezolanos nos hemos consolidado en el mercado nacional para brindarle bienestar y calidad a clientes mayoristas y al detal.",
//   "Desde hace 10 años despertamos tus sentidos con productos y accesorios de belleza para hombres y mujeres. Con presencia en más de 20 estados venezolanos nos hemos consolidado en el mercado nacional para brindarle bienestar y calidad a clientes mayoristas y al detal.",
//   "Ser referentes a nivel nacional en la distribución de productos cosméticos y de belleza, creando cambios que permitan el avance constante de todos nuestros clientes.",
// ];

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

let value = 0;
let slideInterval;

const NosotrosCarrusel = () => {
  // const [index, setIndex] = useState(0);
  // const slideRef = useRef();

  // const next = () => {
  //   value = (value + 1) % images.length;
  //   setIndex(value);
  //   slideRef.current.classList.add("fade-anim");
  // };

  // const handleClick = (e) => {
  //   startSlider();
  //   setIndex(e.target.value);
  //   slideRef.current.classList.add("fade-anim");
  // };

  // const removeAnimation = () => {
  //   slideRef.current.classList.remove("fade-anim");
  // };

  // useEffect(() => {
  //   startSlider();
  //   slideRef.current.addEventListener("animationend", removeAnimation);
  //   slideRef.current.addEventListener("mouseenter", pauseSlider);
  //   slideRef.current.addEventListener("mouseleave", startSlider);

  //   return () => {
  //     clearInterval(slideInterval);
  //   };
  // }, []);

  // const startSlider = () => {
  //   slideInterval = setInterval(() => {
  //     next();
  //   }, 10000);
  // };

  // const pauseSlider = () => {
  //   clearInterval(slideInterval);
  // };

   const [pause, setPause] = useState(false);
		const timer = useRef();
		const [sliderRef, slider] = useKeenSlider({
			slidesPerView: 3,
			loop: true,
			duration: 1000,
			breakpoints: {
				"(min-width: 150px)": {
					slidesPerView: 1,
					mode: "free-snap",
				},
				"(min-width: 768px)": {
					slidesPerView: 1,
					mode: "free-snap",
				},
				"(min-width: 1200px)": {
					slidesPerView: 1,
					mode: "free-snap",
				},
			},
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
			}, 5000);
			return () => {
				clearInterval(timer.current);
			};
		}, [pause, slider]);

  return (
		<section id="NosotrosCarrusel" className="py-8 lg:py-14">
			<div className="h-60v lg:h-80v w-full">
				<div
					ref={sliderRef}
					className="keen-slider w-full h-full relative select-none"
				>
					{/* <div className="object-cover h-full">
            <div className="absolute h-full w-full p-10 lg:p-20">
              <div className="flex flex-col h-full justify-center items-center">
                <p className="text-center font-pshoot text-white text-4xl lg:text-6xl z-30 pb-10">
                  {titulo[index]}
                </p>
                <p className="text-center font-lato font-bold text-white text-lg lg:text-4xl z-30">
                  {descripcion[index]}
                </p>
              </div>
            </div>
            <Image
              alt="..."
              src={images[index]}
              className="z-0 object-cover"
              layout="fill"
              unoptimized
            />
          </div> */}

					{nosotros.map((item) => (
						<div className="keen-slider__slide" key={item.id}>
							<CardMisionVision info={item} />
						</div>
					))}

          

					{/* <div className="grid grid-cols-3 relative w-11/12 bottom-6 gap-5 mx-auto">
						<button
							type="submit"
							value={0}
							onClick={handleClick}
							className={
								index === 0
									? "shim rounded-lg h-2"
									: "bg-progress opacity-50 rounded-lg h-2"
							}
						></button>
						<button
							type="submit"
							value={1}
							onClick={handleClick}
							className={
								index === 1
									? "shim   rounded-lg h-2"
									: "bg-progress opacity-50 rounded-lg h-2"
							}
						></button>
						<button
							type="submit"
							value={2}
							onClick={handleClick}
							className={
								index === 2
									? "shim rounded-lg h-2"
									: "bg-progress opacity-50 rounded-lg h-2"
							}
						></button>
					</div> */}
				</div>
			</div>
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
