/** @type {import('tailwindcss').Config} */
export default {
  // use class strategy so we can toggle manually from JS and respect localStorage
  darkMode: 'class',
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

