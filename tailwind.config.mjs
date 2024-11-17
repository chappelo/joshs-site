/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      // TODO: Remove unused colors
      primary: "#606676",
      secondary: "#478980",
      effect: "#399918",
      white: "#ffffff",
      black: "#222222",
    },
    extend: {
      fontFamily: {
        kabelB: ["KabelB", ...defaultTheme.fontFamily.sans],
        kabelMD: ["KabelMD", ...defaultTheme.fontFamily.sans],
        kabelL: ["KabelL", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        main: "url('/noise.png')",
      },
      keyframes: {
        noise: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "123px 456px" },
        },
        rightslide: {
          from: {
            opacity: "0",
            transform: "translateX(-35px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        leftslide: {
          from: {
            opacity: "0",
            transform: "translateX(+35px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        noise: "noise 1s steps(13) infinite",
        rightslide: "rightslide 1s ease 125ms forwards",
        leftslide: "leftslide 1s ease 125ms forwards",
      },
    },
  },
  plugins: [],
  darkMode: ["selector", '[data-theme="dark"]'],
};
