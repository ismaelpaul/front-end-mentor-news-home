/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			'off-white': '#FFFDFA',
			'very-dark-blue': '#00001A',
			'dark-grayish-blue': '#5D5F79',
			'grayish-blue': '#C5C6CE',
			gunmetal: '#5E607A',
			'light-vermillion': '#F15D51',
			silver: 'C5C6CE',
			yellow: '#E9AA52',
			'soft-orange': '#FFCE8A',
		},
		fontSize: {
			header: [
				'2.6rem',
				{
					lineHeight: '2.5rem',
					fontWeight: '800',
				},
			],
			paragraph: [
				'1rem',
				{
					lineHeight: '1.625rem',
					fontWeight: '300',
				},
			],
			button: [
				'0.875rem',
				{
					lineHeight: '2rem',
					fontWeight: '600',
				},
			],
		},
		extend: {},
	},
	plugins: [],
};
