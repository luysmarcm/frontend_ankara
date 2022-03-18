import Select from "./Select";
import Link from "next/link";

const Estados = ({estados}) => {

	console.log(estados)
  return (
		<div className="flex justify-center">
			<div className="w-48">
				{/* <Select
					value={estados.id}
					placeholder="Selecciona tu estado"
					options={estados}
					name="estadoId"
					objKeyValue="id"
					objKeyString="nombre"
					// onChange={handleChange}
				/> */}

				{/* <select
					className="
                    appearance-none
                    px-3
                    block
                    w-full 
                    h-full
                    text-base
                    font-normal
                    text-black
                    bg-rosado bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0"
				>
					<option selected>Selecciona tu estado</option>
					{estados &&
						estados.map((estado) => (
							<Link
								href={`/tiendas/${estado.slug}`}
								key={estado.nombre}
							>
								<option key={estado._id}>{estado.nombre}</option>
							</Link>
						))}
				</select> */}

				
			</div>
		</div>
	);
}

export default Estados