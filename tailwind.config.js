/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js}',
		'./pages/Delivery.html',
		'./pages/Order.html',
	],
	theme: {
		extend: {
			keyframes: {
				upDown: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
			},
			animation: {
				upDown: 'upDown 3s ease-in-out infinite',
			},
		},
	},
	variants: {},
	plugins: [],
};
