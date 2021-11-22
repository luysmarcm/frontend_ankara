import React from "react";
import CardNosotros from "./Card/CardNosotros";

const nosotros = [
    {
        id: 1,
        titulo: "Maquillaje",
        description:
            "Crea maquillajes de impacto con efecto duradero y resalta tus ojos con colores vibrantes y brillantes ideales para el día o la noche.",
        imagen: "/imagen/1.jpg",
    },
    {
        id: 2,
        titulo: "Cuidado Personal",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut leo vitae nisi cursus vestibulum in vitae augue. ",
        imagen: "/imagen/2.jpg",
    },
    {
        id: 3,
        titulo: "Barbershop	",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut leo vitae nisi cursus vestibulum in vitae augue. ",
        imagen: "/imagen/3.jpg",
    },
    {
        id: 4,
        titulo: "Innovacion",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut leo vitae nisi cursus vestibulum in vitae augue.",
        imagen: "/imagen/4.jpg",
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
