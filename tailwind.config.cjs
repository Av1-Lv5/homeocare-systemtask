/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			backgroundImage: {
				"header-gradient":
					"linear-gradient(270deg, #1c6ac6 0%, #00c7d8 100%)",
				"about-us-form-gradient":
					"linear-gradient(90deg, #00cade 0%, #0fe7fc 50%, #00cade 100%)",
				"chairman-gradient":
					"linear-gradient(90deg, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 40%, rgba(0,202,222,1) 40%, rgba(0,202,222,1) 100%)",
				"footer-gradient":
					"linear-gradient(0deg, rgba(0,202,222,1) 60%, rgba(0,202,222,1) 60%, rgba(255,255,255,1) 60%, rgba(255,255,255,1) 100%)",
				"why-us-form-gradient":
					"linear-gradient(90deg, #0559b5 0%, #308aec 50%, #0559b5 100%)",
			},
			boxShadow: {
				"celeb-avatar-shadow": "inset 0 0 10px 5px #0000ff",
			},
		},
	},
	plugins: [],
};
