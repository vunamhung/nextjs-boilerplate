module.exports = {
  purge: ['src/modules/**', 'src/components/**', 'src/pages/**'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: 'var(--spacing-4)',
      },
    },
  },
  variants: {
    margin: ['responsive', 'last'],
  },
  plugins: [require('@vunamhung/tailwind-config'), require('@tailwindcss/custom-forms'), require('@tailwindcss/typography')],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
