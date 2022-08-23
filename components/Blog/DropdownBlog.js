import { useState } from "react";
import Link from "next/link";
import { gql, useQuery } from "@apollo/client";

const DropDownBlog = ({ categorias }) => {
 
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden col-span-2 z-30">
      <div className="group relative w-full">
        <button
          onClick={toggling}
          className="bg-rosado text-black px-6 h-10 rounded-md focus:bg-rosado2 w-full">
          Selecciona una categoria
        </button>
        {isOpen && (
          <nav
            tabindex="0"
            className="bg-rosado invisible rounded-md w-full absolute left-0 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1 group-focus-within:bg-rosado2">
            <ul className="py-1">
              {categorias &&
                categorias.map((categoria, i) => (
                  <li key={i}>
                    <Link passHref href={`/blog/${categoria.slug}`}>
                      <a
                        onClick={toggling}
                        className="block text-center px-4 py-2 border-b-2 border-rosado ">
                        {categoria.nombre}
                      </a>
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default DropDownBlog;
