import React from "react";
import Image from "next/image";

const CardNosotros = ({info}) => {
    const {titulo, imagen, description} = info;
    return (
        <div className='flex py-5 lg:py-20 justify-around'>
            <div className=' space-y-5 max-w-xs md:max-w-xs'>
                <h2 className='text-black font-lato text-2xl lg:text-2xl italic font-bold'>
                    {titulo}
                </h2>
                <div className='w-60 imagen h-60 relative overflow-hidden rounded-xl'>
                    <div className='absolute'>
                        <Image
                            src={imagen}
                            alt={titulo}
                            width={300}
                            height={300}
                        />
                    </div>
					<div className="absolute text-white bottom-0 bg-secundary bg-opacity-90 hijo px-3 py-2 text-sm">
						{description}
					</div>
                </div>
            </div>
        </div>
    );
};

export default CardNosotros;
