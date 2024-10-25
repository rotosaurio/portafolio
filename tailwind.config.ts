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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#4F46E5",
        accent: "#10B981",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial, sans-serif"],
        mono: ["var(--font-geist-mono)", "Courier, monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
