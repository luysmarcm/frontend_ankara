// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="es-Es">
				<Head>
					<meta name="theme-color" content="#00000" />
					<meta name="google" content="notranslate" />
					<link rel="icon" href="/favicon.ico" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link rel="apple-touch-icon" href="/favicon.ico" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
					<link
						href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&display=swap"
						rel="stylesheet"
					/>
					<link
						href="http://fonts.cdnfonts.com/css/photograph-signature"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Lato:wght@300;700&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body className="max-w-max min-w-min mx-auto">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
