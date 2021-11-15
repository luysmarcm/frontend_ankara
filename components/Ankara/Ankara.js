import React from "react";
import Image from "next/image";
import InstaFeeds from "./InstaFeeds";

const Ankara = () => {
    return (
			<section className="bg-gris place-items-center p-3 md:p-20 lg:py-32 pb-20">
				<div className="flex justify-center mb-8 pt-10">
					<a
						target="_blank"
						href="https://www.instagram.com/ankaravenezuela/"
						className="flex items-center"
						rel="noopener"
					>
						<Image
							src="/imagen/ins.png"
							alt="Logo"
							width={40}
							height={40}
							layout="fixed"
						/>

						<h2 className="inline-block align-middle text-black text-3xl lg:text-5xl font-bold italic ml-2">
							ankaravenezuela
						</h2>
					</a>
				</div>

				<InstaFeeds limit={4} />
			</section>
		);
};

export default Ankara;
