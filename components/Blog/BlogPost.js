import React from "react";
import Image from "next/image";
import SearchBarBlog from "./SearchBarBlog";
import CategoryList from "./CategoryListBlog";
import { loader } from "utils/loader";
import UltimosPost from "./UltimosPost";

const BlogPost = ({ post }) => {
  const { titulo, descripcion_larga, imagen_principal, fecha } = post;

  return (
    <section id="BlogPost">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-5 drop-shadow-xl px-6 lg:px-16 my-10">
        <div className="grid col-span-6 bg-white rounded-lg drop-shadow-xl h-full lg:flex lg:flex-col lg:h-auto flex-center">
          <div className="p-4">
            <p className="text-sm text-black font-bold text-left mb-2">
              {fecha}
            </p>
            <p className="text-black text-left text-4xl font-bold mb-4">
              {titulo}
            </p>
            <div>
              <Image
                alt={titulo}
                src={loader(imagen_principal.data.attributes.url)}
                width={750}
                height={300}
                layout="responsive"
                priority
                objectFit="cover"
                className="object-center rounded-xl"
                unoptimized></Image>
            </div>

            <p className="text-black text-lg p-4 text-justify overflow-hidden">
              {descripcion_larga}
            </p>
          </div>
        </div>
        <div className="col-start-7 col-end-9">
          <div className="hidden bg-white rounded-lg drop-shadow-xl h-auto lg:flex lg:flex-col flex-center mb-4">
            <div className="p-4">
              <CategoryList />
            </div>
          </div>
          <div className="hidden bg-white rounded-lg drop-shadow-xl lg:flex lg:flex-col h-auto flex-center">
            <div className="p-4">
              <UltimosPost />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
