/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import typography from "@tailwindcss/typography";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      screens: {
        tablet: "640px",
        laptop: "1024px",
        desktop: "1680px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        sm: "14px",
        md: "16px",
        lg: "22px",
        xl: "32px",
      },
    },
  },
  plugins: [daisyui, typography],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2d3639",
          secondary: "#ffe4e6",
          accent: "#F1F1F1",
          neutral: "#565656",
          info: "#2C76FF",
        },
      },
    ],
  },
};
