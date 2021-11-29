import React from "react";
import CardNosotros from "./Card/CardNosotros";

const nosotros = [
	{
		id: 1,
		titulo: "Maquillaje",
		description:
			"Variedad, calidad y mucho brillo encontrarás en Ankara. Encuentra tus productos de maquillaje favoritos y prepárate para realzar tu belleza.",
		imagen: "/imagen/maquillaje.jpg",
	},
	{
		id: 2,
		titulo: "Cuidado Personal",
		description:
			"Si de cuidar tu piel se trata, en ANKARA nos encargamos de brindarte productos de calidad para el cuerpo y el rostro. ¡Regálale suavidad y salud a tu piel con ANKARA!",
		imagen: "/imagen/cuidado.jpg",
	},
	{
		id: 3,
		titulo: "Barbershop	",
		description:
			"Para ellos, que aman cuidar su imagen, ofrecemos productos y accesorios para el cuidado de la barba y el cabello, ¡porque ellos, lo merecen!",
		imagen: "/imagen/barber.jpg",
	},
	{
		id: 4,
		titulo: "Aparatos Estéticos ",
		description:
			"Te ayudamos a innovar tu Spa o emprendimiento con aparatos de última generación para los diferentes tratamientos estéticos.",
		imagen: "/imagen/aparatos.jpg",
	},
];

const Nosotros = () => {
    return (
        <section
            id='nosotros'
            className='place-items-center py-24 px-3 sm:px-16 md:py-32 lg:py-36 lg:px-20 space-y-5'
        >
            <h1 className='text-black text-5xl pb-10 font-cd md:text-6xl lg:text-7xl text-center'>
                Ankara{" "}
                <span className='font-lato text-3xl lg:text-5xl font-medium'>
                    es..
                </span>
            </h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-around  drop-shadow-xl '>
                {nosotros.map((item) => (
                    <CardNosotros key={item.id} info={item} />
                ))}
            </div>
        </section>
    );
};

export default Nosotros;
