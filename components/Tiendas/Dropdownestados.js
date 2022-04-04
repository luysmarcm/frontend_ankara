import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import { useState } from "react";

const getEstados = gql`
  query getEstados {
    estados(sort: "nombre:asc") {
      data {
        attributes {
          nombre
          slug
        }
      }
    }
  }
`;

const DropDownEstados = ({estado}) => {
  const { data, loading } = useQuery(getEstados);
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  if (loading) return null;

  const spaces = (string) => string.replace(/-/g, " ")

  return (
    <div className=" z-30">
      <div className="group relative">
        <button
          onClick={toggling}
          className="bg-rosado text-black px-6 h-7 w-48 capitalize rounded-md focus:bg-rosado2 hover:bg-rosado2">
          {estado ? spaces(estado) : "Selecciona tu estado"}
        </button>
        {isOpen && (
          <nav
            tabindex="0"
            className="bg-rosado invisible rounded-md w-full absolute left-0 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1 group-focus-within:bg-rosado2">
            <ul className="py-1">
              {data.estados.data &&
                data.estados.data.map((estado, i) => (
                  <li key={i}>
                    <Link passHref href={`/tiendas/${estado.attributes.slug}`}>
                      <a
                        onClick={toggling}
                        className="block p-2 hover:bg-rosado rounded-md mx-1 text-center ">
                        {estado.attributes.nombre}
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

export default DropDownEstados;
