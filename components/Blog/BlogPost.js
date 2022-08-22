import Image from "next/image";

import { loader } from "utils/loader";
import { CategoryList, UltimosPost } from "components/index";
import { url } from "config/url";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";



const BlogPost = ({ post, categorias }) => {
	const { titulo, descripcion_larga, imagen_principal, published_at } = post;
	const options = { year: "numeric", month: "long", day: "numeric" };
	const useDateTime = (time) => {
		const date = new Date(time);
		return date.toLocaleDateString("es-ES", options);
	};
	const tiempo = useDateTime(published_at);
	return (
		<section id="BlogPost">
			<div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 gap-5 drop-shadow-xl px-6 lg:px-16 my-10">
				<div className="grid md:col-span-4 lg:col-span-6 bg-white rounded-lg drop-shadow-xl h-full lg:flex lg:flex-col lg:h-auto flex-center">
					<div className="p-4">
						<p className="text-sm text-black font-bold text-left mb-2">
							{tiempo}
						</p>
						<p className="text-black text-left text-5xl font-bold mb-4">
							{titulo}
						</p>
						<div>
							<Image
								alt={titulo}
								src={loader(imagen_principal.url)}
								width={750}
								height={300}
								layout="responsive"
								priority
								objectFit="cover"
								className="object-center rounded-xl"
								unoptimized
							></Image>
						</div>
						<div className="prose p-4 text-xl overflow-hidden">
							<ReactMarkdown remarkPlugins={[gfm]}>
								{descripcion_larga}
							</ReactMarkdown>
				
						</div>
					</div>
				</div>
				<div className="hidden md:block md:col-span-2">
					<div className="hidden bg-white rounded-lg drop-shadow-xl h-auto md:flex md:flex-col flex-center mb-4">
						<div className="p-4">
							<CategoryList categorias={categorias} />
						</div>
					</div>
					<div className="hidden bg-white rounded-lg drop-shadow-xl md:flex md:flex-col h-auto flex-center">
						<div className="p-4">
							<UltimosPost />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BlogPost;
