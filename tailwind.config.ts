import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-nav": "#393D41",
        "nav-color-select": "#3EC8B1",
        "color-mostaza": "#C9A16C",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        "bigger-title": "48px",
        "normal-title": "28px",
        "normal-content": "20px",
        "chico-content": "16px",
        "tags-title": "14px",
        "text-card": "16px",
      },
      padding: {},
      fontFamily: {
        roboto: ["var(--font-roboto)", "sans-serif"],
        luckiestGuy: ["var(--font-luckiest-guy)", "cursive"],
      },
      animation: {
        float: "float 10s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
