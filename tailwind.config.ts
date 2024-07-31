import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: "1rem",
        center: true,
      },
      keyframes: {
        levitate: {
          "0%": {
            transform: "translateY(0)",
          },
          "30%": {
            transform: "translateY(-10px)",
          },
          "50%": {
            transform: "translateY(4px)",
          },
          "70%": {
            transform: "translateY(-15px)",
          },
        },
      },
      animation: {
        levitate: "levitate 5s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;
