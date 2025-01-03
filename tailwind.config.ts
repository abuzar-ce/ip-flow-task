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
        primary: "#6E3EA0",
        "gray-bg": "#f9fafb",
        "white-bg": "#ffffff",
        "drawer-bg": "#fbfbfb",
      },
      backgroundImage: {
        "ip-button-grad":
          "linear-gradient(107.16deg, #6E3895 4.67%, #3F50A5 93.93%)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        primary: ["Lato", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        lemon: ["var(--font-lemon)"],
      },
    },
  },
  plugins: [],
};
export default config;
