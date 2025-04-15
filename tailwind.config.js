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
      boxShadow: {
        pixel: "4px 4px 0px 0px rgba(0, 0, 0, 1)",
      },
      animation: {
        pulse: "pulse 2s infinite",
        spin: "spin 1s linear infinite",
        "spin-slow": "spin 3s linear infinite",
        "spin-reverse": "spin-reverse 3s linear infinite",
      },
      fontFamily: {
        pixel: ["Pixelify Sans", "sans-serif"],
      },
      keyframes: {
        pulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        "spin-reverse": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
    },
  },
  plugins: [],
};
