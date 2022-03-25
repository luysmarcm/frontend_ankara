import Image from "next/image";
import Link from "next/link";
import { loader } from "utils/loader";

const CardBlog = ({ post }) => {
  console.log(post)
  const {
    titulo,
    descripcion_corta,
    imagen_principal,
    categorias_blog,
    slug,
    fecha
  } = post.attributes;

  return (
    <div className="grid grid-cols-1 md:grid-col-2 gap-10 m-auto">
      <div className="overflow-hidden shadow-lg rounded-lg h-80 w-80 cursor-pointer m-auto">
        <Link href={`/blog/${categorias_blog.data.attributes.slug}/${slug}`}>
          <a className="flex relative w-full h-full">
            <Image
              alt={imagen_principal.data.attributes.name}
              src={loader(imagen_principal.data.attributes.url)}
              className="max-h-10 w-full object-cover"
              layout="fill"
              unoptimized></Image>
            <div className="mt-48 mx-4 bottom-2 rounded-lg opacity-80 bg-white relative w-full p-3">
              <p className="text-black text-xl font-bold mb-2">{titulo}</p>
              <p className="text-black font-light text-md">
                {descripcion_corta}
              </p>
              <div className="flex flex-col content-end ml-4">
                <p className="text-sm text-black text-right ">{fecha}</p>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CardBlog;
