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
        brand: {
          cream: "#F5F0EB",
          beige: "#E8DFD5",
          taupe: "#C4B5A5",
          gold: "#B8986E",
          "gold-hover": "#D4C5B5",
          cool: "#6B8FA3",
          dark: "#1A1A1A",
          body: "#2C2C2C",
          muted: "#8C7E72",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Pretendard", "sans-serif"],
        display: ["Montserrat", "sans-serif"],
        mono: ["DM Sans", "sans-serif"],
      },
      letterSpacing: {
        "serif-wide": "0.05em",
        "serif-wider": "0.08em",
        label: "0.2em",
      },
      lineHeight: {
        "body-kr": "1.8",
        heading: "1.1",
      },
      backgroundImage: {
        "gradient-hot":
          "linear-gradient(to bottom, #F5F0EB, rgba(232, 223, 213, 0.4))",
        "gradient-cool":
          "linear-gradient(to bottom, #F5F0EB, rgba(107, 143, 163, 0.1))",
        "gradient-hero":
          "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.1), transparent)",
      },
    },
  },
  plugins: [],
};
export default config;
