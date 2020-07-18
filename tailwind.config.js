module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {},
  variants: {},
  plugins: [require("@vunamhung/tailwind-config"), require("@tailwindcss/custom-forms")],
};
