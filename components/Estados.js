import { gql, useQuery } from "@apollo/client";
import client from "config/apollo-client";
import Link from "next/link";

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

const Estados = () => {
	
	const { data, loading } = useQuery(getEstados);

	if (loading) return null;

	return (
		<div className="flex justify-center">
			<div className="w-48">
				<select
					className="
                    appearance-none
                    px-3
                    block
                    w-full 
                    h-full
                    text-base
                    font-normal
                    text-black
                    bg-rosado bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0"
				>
					<option selected>Selecciona tu estado</option>
					{data.estados.data &&
						data.estados.data.map((estado, i) => (
							<Link
								passHref
								href={`/tiendas/${estado.attributes.slug}`}
								// key={estado.attributes.nombre}
							>
							<option key={i}>{estado.attributes.nombre}</option>
							</Link>
						))}
				</select>
			</div>
		</div>
	);
};

export default Estados;
