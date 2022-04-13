import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const images = [
  "/imagen/banner7.png",
  "/imagen/banner7.png",
  "/imagen/banner7.png",
];

const titulo = ["Nosotros", "Misión", "Visión"];

const descripcion = [
  "Desde hace 10 años despertamos tus sentidos con productos y accesorios de belleza para hombres y mujeres. Con presencia en más de 20 estados venezolanos nos hemos consolidado en el mercado nacional para brindarle bienestar y calidad a clientes mayoristas y al detal.",
  "Desde hace 10 años despertamos tus sentidos con productos y accesorios de belleza para hombres y mujeres. Con presencia en más de 20 estados venezolanos nos hemos consolidado en el mercado nacional para brindarle bienestar y calidad a clientes mayoristas y al detal.",
  "Ser referentes a nivel nacional en la distribución de productos cosméticos y de belleza, creando cambios que permitan el avance constante de todos nuestros clientes.",
];

let value = 0;
let slideInterval;

const NosotrosCarrusel = () => {
  const [index, setIndex] = useState(0);
  const slideRef = useRef();

  const next = () => {
    value = (value + 1) % images.length;
    setIndex(value);
    slideRef.current.classList.add("fade-anim");
  };

  const handleClick = (e) => {
    startSlider();
    setIndex(e.target.value);
    slideRef.current.classList.add("fade-anim");
  };

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    startSlider();
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      next();
    }, 10000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  return (
    <section id="NosotrosCarrusel" className="py-8 lg:py-14">
      <div className="h-60v lg:h-80v w-full">
        <div ref={slideRef} className="w-full h-full relative select-none">
          <div className="object-cover h-full">
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
          </div>

          <div className="grid grid-cols-3 relative w-11/12 bottom-6 gap-5 mx-auto">
            <button
              type="submit"
              value={0}
              onClick={handleClick}
              className={
                index === 0
                  ? "shim rounded-lg h-2"
                  : "bg-progress opacity-50 rounded-lg h-2"
              }></button>
            <button
              type="submit"
              value={1}
              onClick={handleClick}
              className={
                index === 1
                  ? "shim   rounded-lg h-2"
                  : "bg-progress opacity-50 rounded-lg h-2"
              }></button>
            <button
              type="submit"
              value={2}
              onClick={handleClick}
              className={
                index === 2
                  ? "shim  rounded-lg h-2"
                  : "bg-progress opacity-50 rounded-lg h-2"
              }></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NosotrosCarrusel;
