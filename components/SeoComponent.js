/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/next-script-for-ga */
import Head from "next/head";

const SeoComponent = ({ title, description, image }) => (
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
		<meta property="og:image" content={`${image}`} />
		<meta property="og:image:width" content="684" />
		<meta property="og:image:height" content="328" />
		<script src="https://apps.elfsight.com/p/platform.js" defer></script>
		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/npm/keen-slider@latest/keen-slider.min.css"
		/>
		
	</Head>
);
export default SeoComponent;
