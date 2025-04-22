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
        pixelPurple: "#b967ff",
        pixelGreen: "#05ffa1",
        pixelOrange: "#ff9f1c",
        darkBg: "#0f0f0f",
        cardGrey: "#2c2c2c",
        cardDark: "#1a1a1a",
        glowBlue: "#4cc9f0",
        glowPink: "#f72585",
        glowPurple: "#7209b7",
      },
      boxShadow: {
        pixel: "4px 4px 0px 0px rgba(0, 0, 0, 1)",
        neonGlow: "0 0 5px theme('colors.neon'), 0 0 20px theme('colors.neon')",
        blueGlow: "0 0 5px theme('colors.pixelBlue'), 0 0 20px theme('colors.pixelBlue')",
        redGlow: "0 0 5px theme('colors.pixelRed'), 0 0 20px theme('colors.pixelRed')",
      },
      animation: {
        pulse: "pulse 2s infinite",
        spin: "spin 1s linear infinite",
        "spin-slow": "spin 3s linear infinite",
        "spin-reverse": "spin-reverse 3s linear infinite",
        glitch: "glitch 1s infinite",
        float: "float 3s ease-in-out infinite",
        scanline: "scanline 2s linear infinite",
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
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
