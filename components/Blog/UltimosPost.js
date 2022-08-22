import { useQuery, gql } from "@apollo/client";
import CardLastPost from "./CardLastPost";



const OBTENER_BLOGS = gql`
	query getLastPosts {
		blogs(sort: "published_at:DESC", limit: 4) {
			_id
			published_at
			imagen_principal {
				url
			}
			titulo
			slug
			categorias_blog {
				nombre
				slug
			}
			descripcion_corta
			descripcion_larga
		}
	}
`;

const UltimosPost = () => {
  const { loading, error, data } = useQuery(OBTENER_BLOGS);

    

  if (loading) return null;
  return (
		<>
			<p className="text-black text-sm lg:text-2xl font-bold capitalize my-2 mb-4">
				Últimos Post
			</p>
			<div className="flex flex-col">
	
				{data.blogs.map((post, i) => (
					<CardLastPost post={post} key={i} />
				))}
			</div>
		</>
	);
};

export default UltimosPost;
