import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#131313",
        secondaryColor: "#E7FE29",
        textSecondary: "rgba(19, 19, 19, 0.05)",
      },
    },
  },
  plugins: [daisyui],
};
