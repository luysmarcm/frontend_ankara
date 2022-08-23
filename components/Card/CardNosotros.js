import Image from "next/image";

const CardNosotros = ({info}) => {
    const {titulo, imagen, description} = info;
    return (
			<div className="relative imagen overflow-hidden rounded-xl space-y-5">
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

		);
};

export default CardNosotros;
