export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  safelist: ["font-pixel"],
  theme: {
    extend: {
      colors: {
        neon: "#39ff14",
        pixelRed: "#ff3c38",
        pixelBlue: "#00cfff",
        pixelYellow: "#f3ff6f",
        darkBg: "#0f0f0f",
        cardGrey: "#2c2c2c",
      },
      fontFamily: {
        pixel: ["Pixelify Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
