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
				fondo: "#F6F6F6",
				rosado: "#FACBC6",
				rosado2: "#F5867D",
        progress: "rgba(155, 155, 155, 1)"
			},
			fontFamily: {
				lato: ["Lato"],
				ps: ["Photograph Signature"],
				cd: ["Cinzel Decorative"],
			},
			backgroundImage: (theme) => ({
				heading: "url('/imagen/heading.png')",
			}),
			maxWidth: {
				max: "1920px",
			},
			minWidth: {
				min: "280px",
			},
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },
		},
	},
	variants: {
		extend: {},
	},
};
