import Image from "next/image";
import { loader } from "utils/loader";
import MapTienda from "./MapTienda";

const InfoTienda = ({ tienda }) => {
  const { nombre, ciudad, telefono, direccion, imagen, horario, coordenadas } =
    tienda;

  //WhatsApp Link
  const formatNumber = (number) => {
    const format = number.slice(1);
    return format.replace("-", "").replace(" ", "");
  };

  //Copiar a Clipboard
  const copy = async () => {
    await navigator.clipboard.writeText(telefono);
    alert("Copiado en Portapapeles");
  };

  return (
		<section className="-z-50">
			<div>
				<section className="px-6 py-8 lg:px-16">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 bg-white rounded-lg drop-shadow-xl h-auto p-4">
						<div className="w-full">
							<Image
								src={loader(imagen.data[0].attributes.url)}
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
						<div className="flex flex-col space-y-4	 lg:space-y-6 text-black">
							<h2 className="text-black text-2xl lg:text-4xl font-bold">
								{nombre}
							</h2>
							<div className=" w-full border-t-2 border-primary" />
							<div className="space-y-3">
								<p className="font-bold text-xl">Dirección:</p>
								<p className=" text-xl">{direccion}</p>
								<p className="font-bold text-xl ">Cuidad: :</p>
								<p className=" text-xl lg:text-xl">{ciudad}</p>
								<p className="font-bold text-xl ">Horario de Atencion: :</p>
								<p className=" text-xl lg:text-xl">{horario}</p>
								<p className="font-bold  text-xl lg:text-xl">Contacto:</p>
								<div className="flex flex-row">
									<div className="h-8 w-8 bg-rosado hover:bg-rosado2 rounded-md p-1 items-center mr-4">
										<button>
											<a href={`https://wa.me/+58${formatNumber(telefono)}`}>
												<Image
													src="/imagen/whatsappicon.svg"
													height={60}
													width={60}
												/>
											</a>
										</button>
									</div>
									<div className="h-8 w-8 bg-rosado hover:bg-rosado2 rounded-md p-0.5 items-center mr-4">
										<button>
											<a href={`tel:+58${formatNumber(telefono)}`}>
												<Image
													src="/imagen/callicon.svg"
													height={60}
													width={60}
												/>
											</a>
										</button>
									</div>
									<div className="h-8 hover:bg-rosado2 rounded-md">
										<button>
											<a onClick={copy} className="text-2xl px-2">
												{telefono}
											</a>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="py-10 pb-3">
						<h2 className="text-black text-2xl lg:text-4xl font-bold text-center">
							Encuentranos
						</h2>
					</div>
				</section>
			</div>
			<div className="h-96 w-full">
				<MapTienda coordenadas={coordenadas} />
			</div>
		</section>
	);
};

export default InfoTienda;
