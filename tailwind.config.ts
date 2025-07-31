import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "basier-medium": ["var(--font-basier-narrow-medium)"],
        "basier-regular": ["var(--font-basier-narrow-regular)"],
        "mazius-bold": ["var(--font-mazius-bold)"],
        "mazius-extraitalic": ["var(--font-mazius-extraitalic)"],
      },
    },
  },
  plugins: [],
};

export default config;
