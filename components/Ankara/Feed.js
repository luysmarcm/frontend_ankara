import React from "react";
import Image from "next/image";

const myLoader = ({ src}) => {
	return `${src}`;
};

const Feed = (props) => {
	const { id, caption, media_type, media_url, permalink } = props.feed;
	let post;

	switch (media_type) {
		case "VIDEO":
			post = (
				<a href={permalink} rel="noopener">
					<video
						width={500}
						height={500}
						src={media_url}
						type="video/mp4"
						controls
						playsinline
					></video>
				</a>
			);
			break;
		case "CAROUSEL_ALBUM":
			post = (
				<a href={permalink} target="_blank" rel="noopener">
					<Image
						loader={myLoader}
						width={820}
						height={820}
						src={media_url}
						alt={caption}
						objectFit="cover"
						className="relative rounded-xl overflow-hidden shadow-lg "
						unoptimized={true}
					/>
				</a>
			);
			break;
		default:
			post = (
				<a href={permalink} target="_blank" rel="noopener">
					<Image
						loader={myLoader}
						width={820}
						height={820}
						src={media_url}
						alt={caption}
						objectFit="cover"
						// layout="responsive"
						className="relative rounded-xl overflow-hidden "
						unoptimized={true}
					/>
				</a>
			);
	}

	return (
		// <div className="flex rounded-xl md:flex lg:w-full justify-around transition duration-500 transform hover:-translate-y-1 hover:scale-110 ">
		// 	{post}
		// </div>
		<div className="relative overflow-hidden rounded-xl space-y-5 drop-shadow-xl transition duration-500 transform hover:-translate-y-1 hover:scale-110">
			{post}
		</div>
	);
};

export default Feed;
