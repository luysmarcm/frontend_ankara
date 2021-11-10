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
				<a href={permalink}>
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
				<a href={permalink} target="_blank">
				
						<Image
							loader={myLoader}
							width={820}
							height={820}
							src={media_url}
							alt={caption}
							objectFit="cover"
							className="relative rounded-xl overflow-hidden shadow-lg "
						/>
					
				</a>
			);
			break;
		default:
			post = (
				<a href={permalink} target="_blank">
					
						<Image
							loader={myLoader}
							width={820}
							height={820}
							src={media_url}
							alt={caption}
							objectFit="cover"
							className="relative rounded-xl overflow-hidden shadow-lg"
						/>
				</a>
			);
	}

	return (
		<div className="p-10 rounded-xl w-11/12 md:flex  lg:w-full transition duration-500 transform hover:-translate-y-1 hover:scale-110 ">
			{post}
		</div>
	);
};

export default Feed;
