import Image from "next/image";
import { loader } from "utils/loader";

const GalleryTienda = ({galeria, nombre}) => {

  return (
		<div className="grid grid-rows-2 space-y-2">
			<div className="w-full  md:w-3/5 lg:w-full">
				<Image
					src={loader(galeria[0].formats.small.url)}
					alt={nombre}
					width={750}
					height={500}
					layout="responsive"
					priority
					objectFit="cover"
					className="object-center rounded-md"
					unoptimized
				/>
			</div>
		</div>
	);
}

export default GalleryTienda