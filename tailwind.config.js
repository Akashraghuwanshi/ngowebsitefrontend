 import flowbite from "flowbite-react/tailwind";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        'great-vibes': ['"Great Vibes"', 'cursive'],
      },
    },
  },
  plugins: [flowbite.plugin()],
}

