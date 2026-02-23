/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx,svelte,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Muli', 'system-ui', 'sans-serif'],
        display: ['"Saira Extra Condensed"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

