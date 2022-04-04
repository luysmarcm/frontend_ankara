import Image from "next/image";
import Link from "next/link";
import React from "react";
import { loader } from "utils/loader";

const CardTiendas = ({ tienda }) => {
 
  const { nombre, ciudad, direccion, imagen, slug, estado } = tienda.attributes; 

  return (
    <div className="bg-white rounded-xl overflow-hidden drop-shadow-xl flex flex-col flex-1 h-full">
      <div>
        <Image
          src={loader(imagen.data[0].attributes.url)}
          alt={nombre}
          width={750}
          height={500}
          layout="responsive"
          priority
          objectFit="cover"
          className="object-center"
          unoptimized
        />
      </div>
      <div className="flex flex-col text-black text-left p-5 space-y-2 h-full">
        <h2 className="tracking-wide text-sm lg:text-2xl font-bold capitalize">
          {nombre}
        </h2>
        <p>{ciudad}</p>
        <p className=" text-black text-opacity-75">{direccion}</p>
      </div>
      <Link href={`/tiendas/${estado.data.attributes.slug}/${slug}`} passHref>
          <button className="mx-5 mb-5 flex flex-start w-1/2 rounded-md bg-rosado2 p-2 hover:bg-rosado hover:text-black ">
            <span className="w-full text-center">Visitar tienda</span>
          </button>
        </Link>
    </div>
  );
};

export default CardTiendas;
