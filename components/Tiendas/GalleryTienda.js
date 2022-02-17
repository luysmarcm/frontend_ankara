import Image from "next/image";
import { useState, createRef } from "react";


const GalleryTienda = () => {
		const [index, setindex] = useState(0);
		const refI = createRef();

		const handleClick = (i) => {
			setindex(i);
			const images = refI.current.children;
			for (let i = 0; i < images.length; i++) {
				images[i].className = images[i].className.replace(
					"w-20 md:w-36 lg:w-36 block object-cover border-4 border-amarillo rounded-md img",
					"w-20 md:w-36 lg:w-36 object-cover opacity-80"
				);
			}
			images[i].className =
				"w-20 md:w-36 lg:w-36 block object-cover border-4 border-amarillo rounded-md img";
		};
  return (
		<div className="grid grid-rows-2 space-y-2">
			<div className="w-full  md:w-3/5 lg:w-full">
				<Image
					src="/imagen/cortijos.jpeg"
					alt="nombre"
					width={750}
					height={500}
					layout="responsive"
					priority
					objectFit="cover"
					className="object-center rounded-md"
					unoptimized
				/>
			</div>
			<div
				className="flex flex-row justify-between "
				// ref={refI}
			>
				{/* map */}

				<div className="w-20 md:w-36 lg:w-36 object-cover">
					<Image
						src="/imagen/cortijos.jpeg"
						alt="nombre"
						width={750}
						height={500}
						layout="responsive"
						priority
						objectFit="cover"
						className="object-center rounded-md"
						unoptimized
						// onClick={() => handleClick(i)}
					/>
				</div>
				<div className="w-20 md:w-36 lg:w-36 object-cover">
					<Image
						src="/imagen/cortijos.jpeg"
						alt="nombre"
						width={750}
						height={500}
						layout="responsive"
						priority
						objectFit="cover"
						className="object-center rounded-md"
						unoptimized
						
					/>
				</div>
				<div className="w-20 md:w-36 lg:w-36 object-cover">
					<Image
						src="/imagen/cortijos.jpeg"
						alt="nombre"
						width={750}
						height={500}
						layout="responsive"
						priority
						objectFit="cover"
						className="object-center rounded-md"
						unoptimized
						
					/>
				</div>
				<div className="w-20 md:w-36 lg:w-36 object-cover">
					<Image
						src="/imagen/cortijos.jpeg"
						alt="nombre"
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
		</div>
	);
}

export default GalleryTienda