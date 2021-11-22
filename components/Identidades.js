import React from "react";
import CardIdentidades from "../components/Card/CardIdentidades";

const identidades = [
    {
        id: 1,
        nombre: "Ankara Studio",
        descripcion:
            "Certifícate como un/a profesional en el fascinante mundo del makeup junto a formadores que te capacitarán y brindarán todas las herramientas necesarias para convertir tu pasión en una profesión.",
        imagen: "/imagen/ankarastudio.png",
    },
    {
        id: 2,
        nombre: "Ankara for me",
        descripcion:
            "Si un cambio de look es lo que necesitas, este es el lugar ideal para renovarte y dejarte consentir por profesionales que te harán sentir única/o. Ven y disfruta del espacio que tú mereces.",
        imagen: "/imagen/ankara4me.png",
    },
];

const Identidades = () => {
    return (
        <section
            id='identidades'
            className=' bg-gris place-items-center px-3 py-20 md:py-32  md:px-16 lg:py-36 lg:px-20 space-y-5'
        >
            <div className='pb-10 flex flex-col items-center space-y-5'>
                <h2 className='text-black text-4xl lg:text-5xl  font-bold '>
                    Identidades
                </h2>
                <p className='text-black text-lg md:text-xl lg:text-1xl text-center max-w-3xl'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the.
                </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                {identidades.map((identidad) => (
                    <CardIdentidades key={identidad.id} identidad={identidad} />
                ))}
            </div>
        </section>
    );
};

export default Identidades;
