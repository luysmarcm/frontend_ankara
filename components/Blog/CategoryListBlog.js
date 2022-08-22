import Link from "next/link";

const CategoryList = ({ categorias }) => {
	return (
		<>
			<p className="text-black text-sm lg:text-2xl font-bold capitalize mb-2">
				Categorias
			</p>
			<div>
				<ul className="list-none text-black">
					{categorias.map((categoria, i) => (
						<li className="text-black font-light text-lg" key={i}>
							<Link key={i} href={`/blog/${categoria.slug}`}>
								<a className="hover:text-primary rounded-lg p-1 m-2 ml-0">
									{categoria.nombre}
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
