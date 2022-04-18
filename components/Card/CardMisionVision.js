import React from 'react'
import Image from 'next/image';

const CardMisionVision = ({info}) => {

  const { id, titulo, descripcion, imagen } = info;


  return (
		<>
			<div className="object-cover h-full">
				<div className="absolute h-full w-full p-10 lg:p-20">
					<div className="flex flex-col h-full justify-center items-center">
						<p className="text-center font-pshoot text-white text-4xl lg:text-6xl z-30 pb-10">
							{titulo}
						</p>
						<p className="text-center font-lato font-bold text-white text-lg lg:text-4xl z-30">
							{descripcion}
						</p>
					</div>
				</div>
				<Image
					alt="..."
					src={imagen}
					className="z-0 object-cover"
					layout="fill"
					unoptimized
				/>
			</div>
			{/* <div className="grid grid-cols-3 relative w-11/12 bottom-6 gap-5 mx-auto">
				<button
					type="submit"
					value={1}
					onClick={handleClick}
					className={
						id === 1
							? "shim rounded-lg h-2"
							: "bg-progress opacity-50 rounded-lg h-2"
					}
				></button>
				<button
					type="submit"
					value={2}
					onClick={handleClick}
					className={
						id === 2
							? "shim   rounded-lg h-2"
							: "bg-progress opacity-50 rounded-lg h-2"
					}
				></button>
				<button
					type="submit"
					value={3}
					onClick={handleClick}
					className={
						id === 3
							? "shim rounded-lg h-2"
							: "bg-progress opacity-50 rounded-lg h-2"
					}
				></button>
			</div> */}
		</>
	);
}

export default CardMisionVision