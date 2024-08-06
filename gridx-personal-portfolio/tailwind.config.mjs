/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			gridTemplateRows: {
				'custom': 'repeat(13, minmax(0, 50px))',
			}
		},
	},
	plugins: [],
}