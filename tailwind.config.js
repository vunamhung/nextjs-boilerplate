module.exports = {
  purge: ["./modules/**", "./components/**", "./pages/**"],
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
  future: {
    removeDeprecatedGapUtilities: true,
  },
  experimental: {
    applyComplexClasses: true,
    uniformColorPalette: true,
    defaultLineHeights: true,
  },
};
