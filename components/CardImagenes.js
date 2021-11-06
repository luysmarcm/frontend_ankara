import React from 'react'
import Image from 'next/image';

const CardImagenes = ({ imagene }) => {
	const { imagen } = imagene;
	return (
		<div>
			<div className="space-y-5">
				<div className="max-w-md mx-auto bg-primary rounded-xl shadow-md overflow-hidden md:max-w-2xl">
					<div className="md:flex">
						<Image src={imagen} alt="imagen" width={920} height={920} />
					</div>
					{/* <div className="hover:p-8">
						<p className="hover:mt-2 hover:text-white">{description}</p>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default CardImagenes
