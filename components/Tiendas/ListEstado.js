import Link from "next/link";

const ListEstado = ({estados}) => {
  return (
		<div className="bg-white bg-opacity-80 space-y-5 rounded-xl hidden md:block overflow-hidden drop-shadow-xl">
			<h3 className="text-primary p-1 font-bold text-2xl text-center ">
				Estados
			</h3>
			<ul className="flex flex-col rounded-lg text-2xl space-y-5  ">
				{estados &&
					estados.map((estado, i) => (
						<li key={i} className="border-b-2 ">
							<Link passHref href={`/puntos-ankara/${estado.slug}`}>
								<a className="p-1 block text-base text-black hover:text-primary text-center">
									{estado.nombre}
								</a>
							</Link>
						</li>
					))}
			</ul>
		</div>
	);
}

export default ListEstado