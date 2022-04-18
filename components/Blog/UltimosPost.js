import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { loader } from "utils/loader";
import { OBTENER_BLOGS } from "query/query";

const UltimosPost = () => {
  const { loading, error, data } = useQuery(OBTENER_BLOGS, {
    variables: {
      limit: 4,
      sort: "fecha:desc"
    }
  });

  if (loading) return null;

  const posts = data.blogs.data;
  return (
    <>
      <p className="text-black text-sm lg:text-2xl font-bold capitalize my-2 mb-4">
        Ultimos Post
      </p>
      <div className="flex flex-col">
        {posts.map(function (post, i) {
          return (
            <div className="h-24" key={i}>
              <Link key={i} href={`/blog/${post.attributes.categorias_blog.data.attributes.slug}/${post.attributes.slug}`}>
                <a className=" text-black font-light text-lg flex flex-row gap-x-2 hover:bg-rosado rounded-xl p-2 -m-2">
                  <Image
                    alt={post.attributes.imagen_principal.data.attributes.name}
                    src={loader(post.attributes.imagen_principal.data.attributes.url)}
                    className="grow-0 rounded-xl object-cover"
                    width={73}
                    height={73}
                    unoptimized
                  />
                  <div className="text-black self-end">
                    <p className="text-md font-bold">{post.attributes.titulo}</p>
                    <p className="text-sm font-light">{post.attributes.fecha}</p>
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UltimosPost;
