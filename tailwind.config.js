module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 50: "#f9faf5", 600: "#829577" },
        blue_gray: { 400: "#7c838a", "400_01": "#879985", "200_66": "#b0bac366" },
        black: { 900: "#000000", "900_7f": "#0000007f" },
        green: { "100_66": "#ccd4c566" },
        white: { A700: "#ffffff" },
        green_300: "#94b38b",
      },
      boxShadow: {},
      fontFamily: { inter: "Inter", poppins: "Poppins", roboto: "Roboto" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
