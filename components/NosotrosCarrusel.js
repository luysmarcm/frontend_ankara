import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const images = [
  "/imagen/banner1.png",
  "/imagen/banner2.png",
  "/imagen/banner3.png",
];

const descripcion = [
  "Descripcion numero 1",
  "Descripcion numero 2",
  "Descripcion numero 3",
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
    <div className="h-80v lg:h-90v w-full">
      <div ref={slideRef} className="w-full h-full relative select-none">
        <div className="object-cover h-full">
          <div className="absolute h-full w-full p-16">
            <div className="flex h-full justify-center items-center">
              <p className="text-center font-cd text-3xl lg:text-5xl z-30">
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
  );
};

export default NosotrosCarrusel;
