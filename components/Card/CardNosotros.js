import Image from "next/image";

const CardNosotros = ({info}) => {
    const {titulo, imagen, description} = info;
    return (
			<div className="relative imagen overflow-hidden rounded-xl space-y-5">
				{/* <h2 className="text-black text-2xl lg:text-2xl italic font-bold">
					{titulo}
				</h2> */}
				<div className="relative">
					
						<Image
							src={imagen}
							alt={titulo}
							width={318}
							height={483}
							layout="responsive"
							className="rounded-xl"
							objectFit="cover"
						/>
					
				</div>
				<div className="absolute text-black bottom-0 bg-white bg-opacity-90 hijo px-3 py-2 text-md sm:text-lg">
					{description}
				</div>
			</div>

			// <div className="bg-white content bg-opacity-80 rounded-xl shadow-lg  md:max-w-2xl">
			// 	<div className="p-5 flex md:flex justify-center relative -translate-y-20 flex-col">
			// 		<Image
			// 			src={imagen}
			// 			alt={titulo}
			// 			width={400}
			// 			height={400}
			// 			className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0 justify-center"
			// 		/>
			// 		<p className="mt-2 text-black text-center text-1xl">{titulo}</p>
			// 	</div>
			// </div>
		);
};

export default CardNosotros;
