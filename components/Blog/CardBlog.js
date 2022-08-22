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

  console.log(imagen_principal);

  const options = { year: "numeric", month: "long", day: "numeric" };
	const useDateTime = (time) => {
		const date = new Date(time);
		return date.toLocaleDateString("es-ES", options);
	};

  const tiempo = useDateTime(published_at);
  return (
		<div className="grid grid-cols-1 md:grid-col-2 ">
			<Link href={`/blog/${categorias_blog.slug}/${slug}`} passHref>
				<div className="card">
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
								<ul className="">
									<li>
										<a className="text-white text-base" href="#0">
											{tiempo}
										</a>
									</li>
								</ul>

								<a href="#0" className="text-white text-2xl font-bold">
									{titulo}
								</a>

								<ul className="">
									<li>
										<a className="text-white text-base" href="#0">
											{descripcion_corta}
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default CardBlog;
