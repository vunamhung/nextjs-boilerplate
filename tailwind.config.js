module.exports = {
  purge: ['src/modules/**', 'src/components/**', 'src/pages/**'],
  theme: {
    aspectRatio: {
      none: 0,
      square: [1, 1],
      '16/9': [16, 9],
      '4/3': [4, 3],
      '21/9': [21, 9],
    },
    extend: {
      container: {
        center: true,
        padding: 'var(--spacing-4)',
        screens: {
          sm: '100%',
          md: '640px',
          lg: '960px',
          xl: '1140px',
        },
      },
      inset: {
        '1/2': '50%',
        '-1/2': '-50%',
      },
    },
  },
  variants: {
    aspectRatio: ['responsive', 'before'],
  },
  plugins: [require('@vunamhung/tailwind-config'), require('@tailwindcss/custom-forms'), require('tailwindcss-aspect-ratio')],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
