import React from 'react'
import Image from 'next/image';
import InstaFeeds from './InstaFeeds'

const Ankara = () => {

    return (
			<section className="bg-gris py-20">
				<div className="flex flex-col items-center ">
					<div className="flex items-baseline space-x-2">
						<a
							target="_blank"
							href="https://www.instagram.com/ankaravenezuela/"
						>
							<Image src="/imagen/ins.png" alt="Logo" width={25} height={25} />
						</a>
						<span className="inline-block align-middle text-primary text-3xl lg:text-5xl font-lato font-bold italic">
							ankaravenezuela
						</span>
					</div>
					<InstaFeeds limit={4} />
				</div>
			</section>
		);
}

export default Ankara
