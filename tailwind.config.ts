import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");
const { white } = colors;

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dominant: { ...colors.zinc },
        primary: { ...colors.lime },
        success: { ...colors.emerald },
        error: { ...colors.red },
        warning: { ...colors.amber },
        info: { ...colors.blue },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "infinite-scroll-1": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-150%)" },
        },
        "infinite-scroll-2": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-130%)" },
        },
        "infinite-scroll-3": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-115%)" },
        },
        "infinite-scroll-4": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-140%)" },
        },
        "infinite-scroll-5": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-90%)" },
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 30s linear infinite",
        "infinite-scroll-1": "infinite-scroll-1 30s linear infinite",
        "infinite-scroll-2": "infinite-scroll-2 30s linear infinite",
        "infinite-scroll-3": "infinite-scroll-3 30s linear infinite",
        "infinite-scroll-4": "infinite-scroll-4 30s linear infinite",
        "infinite-scroll-5": "infinite-scroll-5 30s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
