module.exports = {
  purge: {
    mode: 'all',
    content: ['src/modules/**', 'src/components/**', 'src/pages/**'],
    options: {
      whitelist: ['h1', 'h2', 'h3', 'h4', 'p', 'blockquote', 'strong', 'code', 'pre', '.lead'],
    },
  },
  theme: {
    extend: {
      container: {
        center: true,
        padding: 'var(--spacing-4)',
      },
    },
  },
  variants: {},
  plugins: [require('@vunamhung/tailwind-config'), require('@tailwindcss/custom-forms'), require('@tailwindcss/typography')],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
