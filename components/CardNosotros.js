import React from "react";
import Image from "next/image";

const CardNosotros = ({ nosotro }) => {
	const { titulo, imagen, description } = nosotro;
	return (
		<div className="flex py-20 justify-around  ">
			<div className=" space-y-10 max-w-xs md:max-w-xs">
				<div class="column shadow-md">
					<div className="space-y-5">
						<h2 className="text-black font-lato text-2xl lg:text-2xl italic font-bold">
							{titulo}
						</h2>
						<figure>
							<img src={imagen} className="rounded-xl" />
							<Image
								src={imagen}
								alt="imagen"
								width={200}
								height={200}
								className="rounded-xl"
							/>
						</figure>
						<span className="bg-primary p-5 rounded-b-xl text-white text-sm text-center ">
							{description}
						</span>
					</div>
				</div>
				{/* <h2 className="text-black font-lato text-2xl lg:text-2xl italic font-bold">
					{titulo}
				</h2>
				<div className="group hover:bg-primary max-w-md mx-auto rounded-xl overflow-hidden md:max-w-2xl">
					<div className="md:flex relative">
						<Image
							src={imagen}
							alt="imagen"
							width={200}
							height={200}
							className="rounded-xl"
						/>
					</div>

					<div className="p-5">
						<p className="mt-2 group-hover:text-gray-900 text-white">
							{description}
						</p>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default CardNosotros;
