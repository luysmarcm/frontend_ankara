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

const ListEstado = ({estados}) => {

    const { data, loading } = useQuery(getEstados);


    if(loading) return null

    console.log(data.estados.data)

  return (
		<div className="bg-white bg-opacity-80 space-y-5 rounded-xl hidden md:block overflow-hidden ">
			<h3 className="text-primary p-1 font-bold text-2xl text-center ">Estados</h3>
			<ul className="flex flex-col rounded-lg text-2xl space-y-5  ">
				{data.estados.data &&
					data.estados.data.map((estado, i) => (
						<li key={i} className="border-b-2 ">
							<Link passHref href={`/tiendas/${estado.attributes.slug}`}>
								<a className="p-1 block text-base text-black hover:text-primary text-center">
									{estado.attributes.nombre}
								</a>
							</Link>
						</li>
					))}
			</ul>
		</div>
	);
}

export default ListEstado