module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "media", // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: "#F5867D",
				secundary: "#F6968E",
				fondo: "#000000",
				gris: "#D3D1D1",
				morado: "#4B2771",
				b: "#F1D2BB",
			},
			fontFamily: {
				lato: ["Lato"],
				ps: ["Photograph Signature"],
				cd: ["Cinzel Decorative"],
			},
			backgroundImage: (theme) => ({
				banner: "url('/images/banner.png')",
			}),
			maxWidth: {
				max: "1920px",
			},
			minWidth: {
				min: "280px",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
