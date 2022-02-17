import { gql } from "@apollo/client";

export const OBTENER_PRODUCTOS = gql`
	query obtenerProductos(
		$start: Int
		$limit: Int
		$search: String
	) {
		productos: products(
			sort: { name: ASC }
			pageSize: $limit
			currentPage: $start
			search: $search
			# filter: { category_uid: { in: $category_uid } }
		) {
			total_count
			items {
				name
				sku
				url_key
				image {
					url
					label
				}
				price_range {
					maximum_price {
						regular_price {
							value
						}
					}
				}
			}
		}
	}
`;

