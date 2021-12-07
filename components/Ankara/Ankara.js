import React from "react";
import Image from "next/image";
import InstaFeeds from "./InstaFeeds";

const Ankara = () => {
    return (
			<section className="bg-gris place-items-center py-24 px-3 sm:px-16 md:py-32 lg:py-36 lg:px-20 space-y-5">
				<div className="flex justify-center mb-12">
					<a
						target="_blank"
						href="https://www.instagram.com/ankaravenezuela/"
						className="flex items-center"
						rel="noopener"
					>
						<Image
							src="/imagen/instagram.png"
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
