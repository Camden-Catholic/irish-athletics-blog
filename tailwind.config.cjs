/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './src/components/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			primary: ['Raleway', 'sans-serif'],
			secondary: ['Poppins', 'sans-serif'],
			headliner: ['Dela Gothic One', 'cursive']
		},
		extend: {
			colors: {
				'primary': '#124813',
				'secondary': '#b0811d',
				'CCHSwhite': '#FFFFFC',
			},
		}
	},
	plugins: [],
}
