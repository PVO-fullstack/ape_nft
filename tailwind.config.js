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
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      screens: {
        sm: "480px",
        md: "768px",
        xl: "1280px",
        // smOnly: { max: "767.98px" },
        // mdOnly: { min: "768px", max: "1279.98px" },
        // notXl: { max: "1279.98px" },
      },
      // container: {
      //   center: true,
      //   padding: {
      //     DEFAULT: "1.25rem",
      //     sm: "1.25rem",
      //     md: "1.875rem",
      //     xl: "1.875rem",
      //   },
      // },
      colors: {
        //   //text-colors
        background: "#181818",
        //   placeholder: "#1D1D1B26",
        //   error: "#FF5555",
        //   contact: "#000000",
        //   //bg-colors
        primaryColor: "#1E1E1E",
        heroBg: "#DC3B5A",
        //   purple: "#D6C8FF",
        //   rose: "#EDC6FF",
        //   serviceBlock: "#BBBBBB1A",
        //   block: "#D3D3D340",
        //   blockHover: "#D3D3D380",
        //   blockBlue: "#A6D4FF",
        //   blockPurple: "#A6AFFF",
        //   //btn-colors
        //   btn: "#C3C7F4",
        //   btnHover: "#9FA4DF",
        //   btnDisabled: "#D3D3D3",
        //   bord: "#F5F5F5",
      },
      // backgroundImage: {
      //   serviceGradient:
      //     "linear-gradient(180deg, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.00) 49.48%)",
      // },
      fontFamily: {
        messina: ["var(--font-messina)", "sans-serif"],
        biro: ["var(--font-biro)", "serif"],
        grotesk: ["var(--font-grotesk)", "sans-serif"],
      },
      // keyframes: {
      //   running: {
      //     "0%": { transform: "translateX(100%)" },
      //     "100%": { transform: "translateX(-100%)" },
      //   },
      // },
      // animation: {
      //   "running-line": "running 5s linear infinite",
      // },
      // boxShadow: {
      //   //header: '1px 2px 8px rgba(37, 101, 208, 0.14)', -example
      // },
    },
  },
  plugins: [],
};
