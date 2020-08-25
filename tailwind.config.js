module.exports = {
  purge: ['src/modules/**', 'src/components/**', 'src/pages/**'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: 'var(--spacing-4)',
      },
      maxHeight: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '4/5': '80%',
      },
    },
  },
  variants: {},
  plugins: [require('@vunamhung/tailwind-config'), require('@tailwindcss/custom-forms'), require('@tailwindcss/typography')],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
