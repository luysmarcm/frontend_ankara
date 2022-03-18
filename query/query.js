import { gql } from "@apollo/client";

export const OBTENER_TIENDAS = gql`
	query obtenerTiendas {
		tiendas {
			nombre
			ciudad
			telefono
			direccion
			slug
			galeria {
				url
				formats
				width
				height
			}
			estado {
				nombre
				slug
			}
			identidades {
				nombre
				descripcion
			}
		}
		estados {
			id
			nombre
			slug
		}
	}
`;



