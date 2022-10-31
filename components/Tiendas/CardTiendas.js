import Image from "next/image";
import Link from "next/link";
import { loader } from "utils/loader";

const CardTiendas = ({ tienda }) => {
  return (
		<div className="bg-white rounded-xl overflow-hidden drop-shadow-xl flex flex-col flex-1 h-full">
			<div>
				{tienda.galeria === null ? (
					<Image
						src="/imagen/fondo.jpeg"
						alt={tienda.tienda}
						width={750}
						height={500}
						layout="responsive"
						priority
						objectFit="cover"
						className="rounded-md"
						unoptimized
					/>
				) : (
					<>
						<Image
							src={loader(tienda.galeria.formats.large.url)}
							layout="responsive"
							alt={tienda.tienda}
							width={750}
							height={500}
							priority
							objectFit="cover"
							className="object-center"
							unoptimized
						/>
					</>
				)}
			</div>
			<div className="flex flex-col text-black text-left p-5 space-y-2 h-full">
				<h2 className="tracking-wide text-xl lg:text-2xl font-bold">
					{tienda.tienda}
				</h2>
				<p className="text-base font-bold">{tienda.ciudad}</p>
				<p className=" text-black ">{tienda.direccion}</p>
			</div>
			<Link
				href={`/puntos-ankara/${tienda.estado.slug}/${tienda.slug}`}
				passHref
			>
				<button className="mx-5 mb-5 flex flex-start w-1/2 rounded-md bg-rosado2 p-2 hover:bg-rosado hover:text-black ">
					<span className="w-full text-center">Visitar</span>
				</button>
			</Link>
		</div>
	);
};

export default CardTiendas;
