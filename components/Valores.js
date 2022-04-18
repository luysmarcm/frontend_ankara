import Image from "next/image";
import CardValores from "./Card/CardValores";

const Valores = ({valores}) => {
  return (
		<section id="NosotrosVideoBanner">
			<div className="w-full bg-white">
				<div className="w-full h-full relative select-none bg-heading bg-cover bg-no-repeat bg-scroll">
					<Image
						alt="..."
						src="/imagen/banner6.png"
						className="object-cover"
						layout="responsive"
						width={1920}
						height={1100}
					/>
				</div>
			</div>
			<div className="w-full h-auto bg-white grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 p-4 lg:px-12 -mt-10 pb-8 lg:pb-20">
				{valores.map((item) => (
					<CardValores key={item.id} info={item} />
				))}
			</div>
		</section>
	);
};

export default Valores;
