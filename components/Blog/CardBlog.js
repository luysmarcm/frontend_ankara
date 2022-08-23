import Image from "next/image";
import Link from "next/link";
import { loader } from "utils/loader";

const CardBlog = ({ post }) => {
  const {
    titulo,
    descripcion_corta,
    imagen_principal,
	published_at,
    categorias_blog,
    slug,
  } = post;

    const options = { year: "numeric", month: "long", day: "numeric" };
	const useDateTime = (time) => {
		const date = new Date(time);
		return date.toLocaleDateString("es-ES", options);
	};
	
  const tiempo = useDateTime(published_at);
  return (
		<div className="grid grid-cols-1 md:grid-col-2 ">
			<Link href={`/blog/${categorias_blog.slug}/${slug}`} passHref>
				<a>
					<div className="card rounded-xl">
						<div className="card__image">
							<Image
								src={loader(imagen_principal.url)}
								alt={titulo}
								width={750}
								height={500}
								layout="responsive"
								priority
								objectFit="cover"
								className="rounded-md"
								unoptimized
							/>
							<div className="card__overlay card__overlay--blue">
								<div className="card__overlay-content">
									<p className="text-white text-base">{tiempo}</p>
									<p className="text-white text-2xl font-bold">{titulo}</p>
									<p className="text-white text-base">{descripcion_corta}</p>
								</div>
							</div>
						</div>
					</div>
				</a>
			</Link>
		</div>
	);
};

export default CardBlog;
