import React from "react";
import CardBlog from "./CardBlog";
import CategoryList from "./CategoryListBlog";
import SearchBarBlog from "./SearchBarBlog";

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

const Blogs = () => {
  return (
    <section id="Blog">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 drop-shadow-xl py-8 px-3 lg:px-20 space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 col-span-2 justify-around  drop-shadow-xl ">
          {nosotros.map((item) => (
            <CardBlog key={item.id} />
          ))}
        </div>
        <div>
          <p className="text-black text-3xl font-bold mb-2">Buscar</p>
          <SearchBarBlog />
          <p className="text-black text-3xl font-bold mb-2">Categorias</p>
          <CategoryList />
        </div>
      </div>
    </section>
  );
};

export default Blogs;
