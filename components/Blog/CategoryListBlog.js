import Link from "next/link";
import { useQuery } from "@apollo/client";
import { OBTENER_BLOGCATEGORY } from "query/query";

const CategoryList = () => {
  const { loading, error, data } = useQuery(OBTENER_BLOGCATEGORY);

  if (loading) return null;

  const categorias = data.categoriasBlogs.data;
  return (
		<>
			<p className="text-black text-sm lg:text-2xl font-bold capitalize mb-2">
				Categorias
			</p>
			<div>
				<ul className="list-none text-black">
					{categorias.map((categoria, i) => (
						<li className="text-black font-light text-lg" key={i}>
							<Link key={i} href={`/blog/${categoria.attributes.slug}`}>
								<a className="hover:text-primary rounded-lg p-1 m-2 ml-0">
									{categoria.attributes.nombre}
								</a>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default CategoryList;
