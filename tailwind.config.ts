import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "skype-blue": "#00aff0",
        "microsoft-blue": "#0078d4",
        "windows-blue": "#0055e5",
        "error-red": "#ff0000",
        "geocities-yellow": "#ffff00",
        "toxic-green": "#39ff14",
      },
      fontFamily: {
        "comic-sans": ["Comic Neue", "Comic Sans MS", "cursive"],
        papyrus: ["Papyrus", "fantasy"],
        impact: ["Impact", "sans-serif"],
        "times-new-roman": ["Times New Roman", "serif"],
        "courier-new": ["Courier New", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "win-xp": "linear-gradient(to bottom, #235edf, #58a5f0)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-10px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(10px)" },
        },
        pulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        heartbreak: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.8) rotate(20deg)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        blink: "blink 0.7s infinite",
        marquee: "marquee 15s linear infinite",
        shake: "shake 0.5s cubic-bezier(.36,.07,.19,.97) both",
        pulse: "pulse 2s ease-in-out infinite",
        "spin-slow": "spinSlow 10s linear infinite",
        heartbreak: "heartbreak 1s forwards",
      },
      boxShadow: {
        "inner-glow": "inset 0 0 10px rgba(255, 255, 255, 0.5)",
        "retro-button": "3px 3px 0 rgba(0, 0, 0, 0.3)",
        neon: "0 0 5px #ff00dd, 0 0 10px #ff00dd, 0 0 20px #ff00dd",
      },
      cursor: {
        crosshair: "crosshair",
        "not-allowed": "not-allowed",
      },
      borderWidth: {
        "6": "6px",
        "8": "8px",
      },
    },
  },
  plugins: [],
};

export default config;
