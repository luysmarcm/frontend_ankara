const VideoBanner = () => {
  return (
			<video
				width={2000}
				height={900}
				src="/imagen/ankara.mp4"
				type="video/mp4"
				loop
				autoPlay
				muted
				className='cover'
			></video>
	);
}

export default VideoBanner