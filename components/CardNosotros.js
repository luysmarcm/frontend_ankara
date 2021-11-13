import React from "react";
import Image from "next/image";

const CardNosotros = ({info}) => {
    const {titulo, imagen, description} = info;
    return (
		
				<div className="relative imagen overflow-hidden rounded-xl space-y-5">
					<h2 className="text-black font-lato text-2xl lg:text-2xl italic font-bold">
						{titulo}
					</h2>
					<div className="relative">
						<Image
							src={imagen}
							alt={titulo}
							width={300}
							height={300}
							layout="responsive"
                            className="rounded-xl"
						/>
					</div>
					<div className="absolute text-white bottom-0 bg-secundary bg-opacity-90 hijo px-3 py-2 text-sm">
						{description}
					</div>
				</div>
			
		);
};

export default CardNosotros;
