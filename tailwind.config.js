module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "var(--spacing-4)",
      },
    },
  },
  variants: {},
  plugins: [require("@vunamhung/tailwind-config"), require("@tailwindcss/custom-forms")],
};
