/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./node_modules/rizzui/dist/*.{js,ts,jsx,tsx}",
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				heading: ["EB Garamond", "serif"],
				body: ["IBM Plex Sans", "sans-serif"],
			},
			screens: {
				lg: { min: "925px" },
			},
			colors: {
				primary: "#0D1216",
				secondary: "#AACBBC",
				"accent-primary": "#EEE3A9",
				"accent-secondary": "#1A734A",

				foreground: "#0B2016",
				background: "#F3FAF3",
			},
		},
	},
	plugins: [],
};
