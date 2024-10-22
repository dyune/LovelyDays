import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#ff8a8a",

          "secondary": "#c2ecc7",

          "accent": "#bae6fd",

          "neutral": "#d9d9d9",

          "base-100": "#f3f4f6",

          "info": "#d9d9d9",

          "success": "#86efac",

          "warning": "#e11d48",

          "error": "#fdba74",
        },
      },
    ],
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'title':['figtree'],
        'serif':['inria-serif']

      }
    },
  },
  plugins: [require('daisyui')],
}

