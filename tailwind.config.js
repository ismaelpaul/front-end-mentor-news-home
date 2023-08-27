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
			'x-large-heading': [
				'3.5rem',
				{
					lineHeight: '3.5rem',
					fontWeight: '800',
				},
			],
			'medium-heading': [
				'2rem',
				{
					lineHeight: '2rem',
					fontWeight: '700',
				},
			],
			'small-heading': [
				'1.25rem',
				{
					lineHeight: '2rem',
					fontWeight: '700',
				},
			],
			'x-small-heading': [
				'1.125rem',
				{
					lineHeight: '1.5rem',
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
			nav: [
				'0.938rem',
				{
					lineHeight: '1.625rem',
				},
			],
			'sidebar-nav': [
				'1.125rem',
				{
					lineHeight: '1.5rem',
					fontWeight: '400',
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
		screens: {
			laptop: '1440px',
		},
		extend: {},
	},
	plugins: [],
};
