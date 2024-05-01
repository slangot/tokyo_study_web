import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary": "#653C87",
        "secondary": "#520380",
        "third": "#3A025B",
        "fourth": "#220135",
        "medium-dark": "#1A0129",
        "dark": "#11001C",
        "dark-gray": 'rgb(17,24,39)',
        "light": "#E6D7FA"
      }
    },
  },
  plugins: [],
};
export default config;
