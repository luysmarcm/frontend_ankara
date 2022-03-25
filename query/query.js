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

export const OBTENER_BLOGS = gql`
  query obtenerBlogs {
    blogs {
      data {
        attributes {
          titulo
          descripcion_corta
          descripcion_larga
          imagen_principal {
            data {
              attributes {
                url
                name
              }
            }
          }
          slug
          categorias_blog {
            data {
              attributes {
                nombre
                slug
              }
            }
          }
          fecha
        }
      }
    }
  }
`;

export const OBTENER_BLOGCATEGORY = gql`
  query obtenerBlogsCategory {
    categoriasBlogs {
      data {
        attributes {
          nombre
          slug
        }
      }
    }
  }
`;
