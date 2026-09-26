import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./data/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#122A38",
        teal: "#087C83",
        cyan: "#1FA6AD",
        mist: "#EFF5F5",
        line: "#DCE7E8",
        coral: "#DE6C55"
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        display: ["Georgia", "Times New Roman", "serif"]
      },
      boxShadow: {
        lift: "0 18px 60px rgba(18,42,56,.11)"
      }
    }
  },
  plugins: []
};

export default config;
