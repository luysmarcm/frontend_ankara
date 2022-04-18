import Image from 'next/image';

const CardMisionVision = ({info}) => {

  const {titulo, descripcion, imagen } = info;
  
  return (
		<div className="object-cover h-96 lg:h-full lg:w-full">
			<div className="absolute h-full w-full p-10 lg:p-20">
				<div className="flex flex-col h-full justify-center items-center">
					<p className="text-center font-pshoot text-primary text-4xl lg:text-6xl z-30 pb-10">
						{titulo}
					</p>
					<p className="text-center font-lato font-bold text-white text-md lg:text-xl z-30">
						{descripcion}
					</p>
				</div>
			</div>
			<Image
				alt={titulo}
				src={imagen}
				className="z-0 object-cover"
				layout="responsive"
				priority
				width={800}
				height={300}
			/>
		</div>
	);
}

export default CardMisionVision