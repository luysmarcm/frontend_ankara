import React from "react";
import Image from "next/image";

const CardMarcas = ({marca}) => {
    const {nombre, description, imagen} = marca;

    return (
        <section className='bg-morado rounded-xl lg:flex lg:even:flex-row-reverse overflow-hidden py-5  '>
            <div className='relative flex-1'>
                <Image
                    src={imagen}
                    alt={nombre}
                    width={900}
                    height={400}
                    layout='responsive'
                    priority
                    className='block'
                />
            </div>

            <div className='space-y-4 lg:w-7/12 xl:w-8/12 p-12 my-auto'>
                {/* <h2 className='uppercase tracking-wide text-3xl lg:text-4xl text-white text-center font-bold lg:text-left'>
                    {nombre}
                </h2> */}
                <p className='mt-2 text-white text-lg md:text-xl text-center lg:text-xl lg:text-left'>
                    {description}
                </p>
            </div>
        </section>
    );
};

export default CardMarcas;
