/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      primary: "#606676",
      // TODO: Do I want this ?
      secondary: "#478980",
      // white: "#E7F0DC" // nice
      effect: "#399918",
      // white: "#F6FFF8",
      white: "#ffffff",
      black: "#222222",
    },
    screens: {
      laptop: "717px",
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        main: "url('/noise.png')",
      },
      keyframes: {
        noise: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "123px 456px" },
        },
      },
      animation: {
        noise: "noise 1s steps(13) infinite",
      },
    },
  },
  plugins: [],
  darkMode: ["selector", '[data-theme="dark"]'],
};
