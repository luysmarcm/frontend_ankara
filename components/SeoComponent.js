/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/next-script-for-ga */
import Head from "next/head";

const SeoComponent = ({ title, description }) => (
	<Head>
		<title>{title}</title>
		<meta name="description" content={description} />
		<meta property="og:type" content="website" />
		<meta name="og:title" property="og:title" content={title} />
		<meta
			name="og:description"
			property="og:description"
			content={description}
		/>
		<meta property="og:site_name" content={title} />
		{/* <meta property="og:image" content={`${image}`} /> */}
		<meta property="og:image:width" content="684" />
		<meta property="og:image:height" content="328" />
		<script src="https://apps.elfsight.com/p/platform.js" defer></script>
		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/npm/keen-slider@latest/keen-slider.min.css"
		/>
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link
			href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&display=swap"
			rel="stylesheet"
		/>
		<link href="http://fonts.cdnfonts.com/css/photograph-signature" rel="stylesheet"/>
	</Head>
);
export default SeoComponent;
