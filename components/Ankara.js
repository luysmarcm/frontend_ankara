import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CardImagenes from "./CardImagenes";
import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";

const imagenes = [
	{
		id: 1,
		imagen: "/imagen/image1.png",
	},
	{
		id: 2,
		imagen: "/imagen/image1.png",
	},
	{
		id: 3,
		imagen: "/imagen/image1.png",
	},
];

const Ankara = () => {
	// const {media_type, permalink, media_url, id} = data

	const [token, settoken] = useState("");
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setloading] = useState(true);

	useEffect(() => {
		fetch(
			`https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url&&access_token=IGQVJWSjYtRmpCRmVjcElKd2pZANGZAaXzB4LVM2MC1sMEF1bEd3TnNjbVdNM0M3ZA2FZAUEdTT2h5T0ZAULTF0UXZAwQW9Kam5iUTJlbGZA5d0FlaFRfWllxQjN0WEo0aGJSSjZAHdDdBdEVNMXhsSFM4UzlrMQZDZD`
		)
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw response;
			})
			.then((data) => {
				setData(data);
			})
			.catch((error) => {
				console.error("Error Data: ", error);
				setError(error);
			})
			.finally(() => {
				setloading();
			});
	}, []);

	console.log(data);

	return (
		<div
			id="identidades"
			className="min-h-screen bg-gris place-items-center py-20"
		>
			<div className="p-10 flex flex-col items-center">
				<a
					target="_blank"
					href="https://www.tiktok.com/@ankaravenezuela?"
					rel="noopener noreferrer"
					className="text-primary text-5xl font-lato font-bold  "
				>
					<Image
						src="/imagen/ins.png"
						alt="Logo"
						width={24}
						height={24}
						className=""
					/>
					ankaravenezuela
				</a>

				<div className="flex flex-auto justify-center">
					{/* <InstagramFeed
							token="IGQVJWSjYtRmpCRmVjcElKd2pZANGZAaXzB4LVM2MC1sMEF1bEd3TnNjbVdNM0M3ZA2FZAUEdTT2h5T0ZAULTF0UXZAwQW9Kam5iUTJlbGZA5d0FlaFRfWllxQjN0WEo0aGJSSjZAHdDdBdEVNMXhsSFM4UzlrMQZDZD"
							counter="4"
						/> */}
				</div>
			</div>
			{/* <p className="text-black text-sm text-center w-64">
						Siéntete en confianza, segura y con mucha actitud en nuestro espacio
						exclusivo, donde nuestros profesionales te brindarán la mejor
						atención y calidad en cada uno de nuestros servicios.
					</p> */}
			<div className="p-32 flex justify-center">
				<div className="w-full grid grid-cols-1 gap-5"></div>
			</div>
		</div>
	);
};

export default Ankara;
