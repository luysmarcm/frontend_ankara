import { gql, useQuery } from "@apollo/client";
import Link from 'next/link';

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

const DropDownEstados = () => {
  const { data, loading } = useQuery(getEstados);

  if (loading) return null;

  return (
    <div class="hidden md:block z-30">
      <div class="group relative">
        <button class="bg-rosado text-black px-6 h-10 rounded-md focus:bg-rosado2 hover:bg-rosado2">
          Selecciona tu estado
        </button>
        <nav
          tabindex="0"
          class="bg-rosado invisible rounded-md w-full absolute left-0 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1 group-focus-within:bg-rosado2">
          <ul class="py-1">
            {data.estados.data &&
              data.estados.data.map((estado, i) => (
                <li key={i}>
                  <Link
                    passHref
                    href={`/tiendas/${estado.attributes.slug}`}
                  >
                    <a class="block p-2 hover:bg-rosado rounded-md mx-1 text-center">{estado.attributes.nombre}</a>
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DropDownEstados;
