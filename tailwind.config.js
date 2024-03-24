/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(200%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      screens: {
        sm: "480px",
        md: "768px",
        xl: "1280px",
      },
      colors: {
        background: "#181818",
        primaryColor: "#1E1E1E",
        heroBg: "#DC3B5A",
      },
      fontFamily: {
        messina: ["var(--font-messina)", "sans-serif"],
        biro: ["var(--font-biro)", "serif"],
        grotesk: ["var(--font-grotesk)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
