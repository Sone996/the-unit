/** @type {import('tailwindcss').Config} */
module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				white: '#ffffff',
				red: "#D32728",
				darkRed: "#D8000C",
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}