import { useState } from 'react';
import Link from "next/link";

const DropDownEstadosMobile = ({estado, estados}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const spaces = (string) => string.replace(/-/g, " ")
  return (
		<div className="md:hidden col-span-2 z-30">
			<div className="group relative w-full">
				<button
					onClick={toggling}
					className="bg-rosado text-black font-bold capitalize px-6 h-10 rounded-md focus:bg-rosado2 w-full"
				>
					{estado ? spaces(estado) : "Selecciona tu estado"}
				</button>
				{isOpen && (
					<nav
						tabindex="0"
						className="bg-rosado invisible rounded-md w-full absolute left-0 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1 group-focus-within:bg-rosado2"
					>
						<ul className="py-1">
							{estados &&
								estados.map((estado, i) => (
									<li key={i}>
										<Link passHref href={`/puntos-ankara/${estado.slug}`}>
											<a
												onClick={toggling}
												className="block text-center px-4 py-2 border-b-2 border-rosado font-bold"
											>
												{estado.nombre}
											</a>
										</Link>
									</li>
								))}
						</ul>
					</nav>
				)}
			</div>
		</div>
	);
};

export default DropDownEstadosMobile;
