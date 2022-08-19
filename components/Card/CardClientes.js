import Image from "next/image";
import Modal from "components/Modal";
import { useState } from "react";


const CardClientes = ({cliente}) => {
    const {nombre, comentario, imagen, profesion} = cliente;
	const [showModal, setshowModal] = useState(false);

    return (
			<div className="content bg-opacity-80 rounded-xl shadow-lg overflow-hidden md:max-w-2xl relative imagen">
				<div className="p-5 flex md:flex justify-center relative transition duration-500 transform hover:translate-y hover:scale-110">
					<button type="button" onClick={() => setshowModal(true)}>
						<Image
							src={imagen}
							alt={nombre}
							width={128}
							height={128}
							className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0 justify-center"
						/>
					</button>
				</div>

				<div className="p-4 lg:p-8">
					{/* <p className="mt-2 text-black text-center text-1xl">{comentario}</p> */}
					<p className="mt-2 text-black text-center font-bold text-xl">
						{nombre}
					</p>
					{/* <p className="mt-2 text-black text-opacity-60 text-center text-sm">
						{profesion}
					</p> */}
				</div>
				<div className="absolute text-black bottom-0 bg-rosado bg-opacity-90 hijo px-3 py-2 text-md sm:text-lg">
					{comentario}
				</div>

				{/* <Modal
					showModal={showModal}
					setshowModal={setshowModal}
					comentario={comentario}
				/> */}
			</div>
		);
};

export default CardClientes;
