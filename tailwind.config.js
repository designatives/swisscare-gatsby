/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
	content: ["./src/pages/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}", "./src/sections/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.{js,jsx,ts,tsx}"],
	plugins: [],
	theme: {},
	extend: {
		colors: {
			brand: {
				500: "#EDF958",
			},
		},
	},
};
