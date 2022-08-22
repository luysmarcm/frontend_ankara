import Image from "next/image";

import CarruselValores from "../Card/CarruselValores";

const Valores = ({valores}) => {
  return (
		<section id="NosotrosVideoBanner">
			<div className="w-full bg-white pb-20 space-y-5">
				{/* <div className="w-full h-full relative select-none bg-heading bg-cover bg-no-repeat bg-scroll">
					<Image
						alt="..."
						src="/imagen/banner6.png"
						className="object-cover"
						layout="responsive"
						width={1920}
						height={1100}
					/>
				</div> */}
			</div>
			<h2 className="pb-10 text-black text-center text-4xl lg:text-5xl font-extrabold italic ">
					Valores
				</h2>

			<div className="w-full h-auto bg-white grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 p-4 lg:px-12 -mt-10 pb-8 lg:pb-20">
				{/* <h1 className="text-black font-bold italic text-5xl pb-10 font-lato md:text-6xl lg:text-7xl text-center">
					Valores
				</h1> */}
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-40 lg:gap-10 justify-between drop-shadow-xl pb-10 lg:pb-0">
				{/* {valores.map((item) => (
					<CardValores key={item.id} info={item} />
				))} */}
			</div>
			<CarruselValores valores={valores} />
		</section>
	);
};

export default Valores;
