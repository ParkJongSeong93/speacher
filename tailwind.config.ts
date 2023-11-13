import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "uploadBg-gray": "#EFEFEF",
        "mainNav-purple": "#6056ED",
        "logInPageBtn-gray": "#D9D9D9",
        "uploadPageBtn-lightgray": "#D9D9D9",
        "footer-purple": "#7985ED",
        "uploadPageBtn-gray": "#B1B1B2",
      },
    },
  },
  plugins: [],
};
export default config;
