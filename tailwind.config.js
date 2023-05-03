const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        base: "#555555",
        heading: "#040404",
        primary: "#111111",
      },
      fontFamily: {
        sans: ["Inter", "Open Sans", ...defaultTheme.fontFamily.sans],
        title: ["Signika", "Open Sans", ...defaultTheme.fontFamily.sans],
        pera: ["Heebo", "Open Sans", ...defaultTheme.fontFamily.sans],
        noto: ["Noto Sans Khmer", "Open Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
