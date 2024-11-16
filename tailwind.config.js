/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				rajblue: {
					50: "#FF9800",
				},
				rajgreen: "#hh10202",
			},
			screens: {
				xsm: {
					min: "0px",
					max: "639px",
				},
			},
		},
	},
	plugins: [],
};
