import React from "react";
import Image from "next/image";
import SearchBarBlog from './SearchBarBlog';
import CategoryList from './CategoryListBlog';
import { loader } from "utils/loader";
import UltimosPost from "./UltimosPost";

const BlogPost = ({ post }) => {
  const { titulo, descripcion_larga, imagen_principal, fecha } = post;

  return (
    <section id="BlogPost">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 py-8 px-3 lg:px-20 space-y-5">
        <div className="col-span-2 lg:px-5">
          <p className="text-sm text-black font-bold text-left mb-2">
            {fecha}
          </p>
          <p className="text-black text-left text-4xl font-bold mb-4">
            {titulo}
          </p>

          <Image
            alt={titulo}
            src={loader(imagen_principal.data.attributes.url)}
            layout="responsive"
            className="w-full rounded-xl object-cover"
            width={500}
            height={400}
            unoptimized></Image>

          <p className="text-black text-lg pt-4 text-justify">
            {descripcion_larga}
          </p>
        </div>

        <div className="hidden lg:inline-block">
          <SearchBarBlog />
          <CategoryList />
          <UltimosPost />
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
