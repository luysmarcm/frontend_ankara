import { gql } from "@apollo/client";

export const OBTENER_HOME = gql`
	query getHome {
		ankaraes {
			titulo
			descripcion
			imagen {
				name
				url
			}
		}
	}
`;
