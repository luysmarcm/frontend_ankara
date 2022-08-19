import Image from "next/image";


const NosotrosCard = ({ info }) => {
    	
	 const { titulo, imagen, description } = info;
		return (
			<div className="carta-box mx-auto w-full h-full">
				<div class="carta">
					<div class="cara">
						<div className="relative">
							<Image
								src={imagen}
								alt={titulo}
								width={318}
								height={483}
								// layout="responsive"
								className="rounded-xl"
								objectFit="cover"
							/>
						</div>
					</div>
					<div className="cara detras">
						<div className="flex flex-wrap items-baseline space-y-6 pt-24">
							<h3 className="space-y-6">
								<p className="block notranslate text-xl leading-7 font-bold  md:2xl lg:text-base text-center  ">
									{description}
								</p>
							</h3>
						</div>
					</div>
				</div>
			</div>
		);
};

export default NosotrosCard