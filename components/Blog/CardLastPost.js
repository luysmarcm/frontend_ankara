import Image from "next/image";
import Link from "next/link";
import { loader } from "utils/loader";

const CardLastPost = ({post}) => {

	const { titulo, imagen_principal, categorias_blog, slug, published_at } =
		post;

	const options = { year: "numeric", month: "long", day: "numeric" };

	const useDateTime = (time) => {
		const date = new Date(time);
		return date.toLocaleDateString("es-ES", options);
	};

	const tiempo = useDateTime(published_at);

	return (
		<div className="h-24 block">
			<Link href={`/blog/${categorias_blog.slug}/${slug}`}>
				<a className=" text-black font-light text-lg flex flex-row gap-x-2 hover:bg-rosado rounded-xl p-2 -m-2">
					<Image
						alt={imagen_principal.titulo}
						src={loader(imagen_principal.url)}
						className="grow-0 rounded-xl object-cover"
						width={73}
						height={73}
						unoptimized
					/>
					
						<div className="text-black self-end overflow-hidden">
							<p className="text-md font-bold">{titulo}</p>
							<p className="text-sm font-light">{tiempo}</p>
						
					</div>
				</a>
			</Link>
		</div>
	);
}

export default CardLastPost