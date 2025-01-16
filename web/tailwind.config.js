/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["EB Garamond", "serif"],
        body: ["IBM Plex Sans", "sans-serif"]
      },
      screens: {
        lg: { min: "925px" }
      },
      colors: {
        primary: "#262731",
        "accent-primary": "#994A62",
        "accent-secondary": "#164D59",
        foreground: "#F9F9F9",
        background: "#FFF"
      }
    }
  },
  plugins: []
};
