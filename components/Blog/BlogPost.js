import React from "react";
import CategoryList from "./CategoryList/CategoryListBlog";
import SearchBarBlog from "./SearchBar/SearchBarBlog";
import Image from "next/image";

const nosotros = [
  {
    id: 1,
    titulo: "Maquillaje",
    description:
      "Variedad, calidad y mucho brillo encontrarás en Ankara. Encuentra tus productos de maquillaje favoritos y prepárate para realzar tu belleza.",
    imagen: "/imagen/maquillaje.jpg",
  },
  {
    id: 2,
    titulo: "Cuidado personal",
    description:
      "Si de cuidar tu piel se trata, en ANKARA nos encargamos de brindarte productos de calidad para el cuerpo y el rostro. ¡Regálale suavidad y salud a tu piel con ANKARA!",
    imagen: "/imagen/cuidado.jpg",
  },
  {
    id: 3,
    titulo: "Barbershop	",
    description:
      "Para ellos, que aman cuidar su imagen, ofrecemos productos y accesorios para el cuidado de la barba y el cabello, ¡porque ellos, lo merecen!",
    imagen: "/imagen/barber.jpg",
  },
  {
    id: 4,
    titulo: "Aparatos estéticos ",
    description:
      "Te ayudamos a innovar tu Spa o emprendimiento con aparatos de última generación para los diferentes tratamientos estéticos.",
    imagen: "/imagen/aparatos.jpg",
  },
];

const BlogPost = () => {
  return (
    <section id="BlogPost">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 py-8 px-3 lg:px-20 space-y-5">
        <div className="col-span-2 px-10 lg:px-5">
          <p className="text-sm text-black font-bold text-left mb-2">20 mar 2029</p>
          <p className="text-black text-left text-4xl font-bold mb-4">
            Titulo
          </p>
          <Image
            alt="blog photo"
            src="/imagen/endertorres.png"
            className="w-full rounded-xl object-cover"
            layout="responsive"
            width={500}
            height={400}></Image>
          <p className="text-black text-lg pt-4 text-justify">
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum. Why do we use it? It is a long established fact that a reader
            will be distracted by the readable content of a page when looking at
            its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using
            'Content here, content here', making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like).
          </p>
        </div>

        <div className="hidden lg:inline-block">
          <p className="text-black text-3xl font-bold mb-2">Buscar</p>
          <SearchBarBlog />
          <p className="text-black text-3xl font-bold mb-2">Categorias</p>
          <CategoryList />
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
