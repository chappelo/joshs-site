/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      primary: "#606676",
      // TODO: Do I want this ?
      secondary: "#478980",
      // white: "#E7F0DC" // nice
      effect: "#399918",
      // white: "#F6FFF8",
      white: "#ffffff",
    },
    screens: {
      laptop: "717px",
    },
    extend: {
            fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: [],
  darkMode: ["selector", '[data-theme="dark"]'],
}
