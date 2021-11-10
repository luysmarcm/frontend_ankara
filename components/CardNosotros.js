import React from "react";
import Image from "next/image";

const CardNosotros = ({ nosotro }) => {
	const { titulo, imagen, description } = nosotro;
	return (
		<div className="flex py-5 lg:py-20 justify-around  ">
			<div className=" space-y-5 max-w-xs md:max-w-xs">
				<h2 className="text-black font-lato text-2xl lg:text-2xl italic font-bold">
					{titulo}
				</h2>
				<figure className="group nosotros ">
					<Image
						src={imagen}
						alt={titulo}
						width={300}
						height={300}
						className="rounded-xl"
					/>
					<figcaption className="rounded-xl p-5 bg-primary opacity-80 w-full hover:-translate-y-2 duration-700 ease-in-out ">
						<p className="text-white text-center text-sm lg:text-base">
							{description}
						</p>
					</figcaption>
				</figure>
			</div>
		</div>
	);
};

export default CardNosotros;
