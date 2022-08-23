import Image from "next/image";

import CarruselValores from "../Card/CarruselValores";

const Valores = ({valores}) => {
  return (
		<section id="NosotrosVideoBanner">
			<div className="w-full bg-white pb-20 space-y-5"></div>	
			<div className="flex space-x-4 justify-center pb-24">
				<div className="flex flex-col justify-center justify-items-center">
					<div className="relative z-20 text-3xl lg:text-5xl text-center font-pshoot text-opacity-80 text-gray-200 ">
						Valores
						<figure className="absolute z-10 md:flex -translate-y-3">
							<div className="text-center">
								<h2>
									<span className="px-2 lg:px-5 first-letter:block notranslate text-center text-black font-lato text-4xl font-extrabold lg:text-5xl">
										Valores
									</span>
								</h2>
							</div>
						</figure>
					</div>
				</div>
			</div>
			{/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-40 lg:gap-10 justify-between drop-shadow-xl pb-10 lg:pb-0"></div> */}
			<CarruselValores valores={valores} />
		</section>
	);
};

export default Valores;
