import { gql } from "@apollo/client";

export const OBTENER_TIENDAS = gql`
	query obtenerTiendas {
		tiendas {
			data {
				attributes {
					nombre
					ciudad
					coordenadas
					direccion
					telefono
					slug
					imagen {
						data {
							attributes {
								url
								name
							}
						}
					}
					estado {
						data {
							attributes {
								nombre
								slug
							}
						}
					}
				}
			}
		}
		estados {
			data {
				attributes {
					nombre
					slug
				}
			}
		}
	}
`;



