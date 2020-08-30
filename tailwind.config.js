const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['src/modules/**', 'src/components/**', 'src/pages/**'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: '#000',
      white: '#fff',

      gray: {
        50: 'var(--color-gray-50)',
        100: 'var(--color-gray-100)',
        200: 'var(--color-gray-200)',
        300: 'var(--color-gray-300)',
        400: 'var(--color-gray-400)',
        500: 'var(--color-gray-500)',
        600: 'var(--color-gray-600)',
        700: 'var(--color-gray-700)',
        800: 'var(--color-gray-800)',
        900: 'var(--color-gray-900)',
      },
      primary: {
        50: 'var(--color-primary-50)',
        100: 'var(--color-primary-100)',
        200: 'var(--color-primary-200)',
        300: 'var(--color-primary-300)',
        400: 'var(--color-primary-400)',
        500: 'var(--color-primary-500)',
        600: 'var(--color-primary-600)',
        700: 'var(--color-primary-700)',
        800: 'var(--color-primary-800)',
        900: 'var(--color-primary-900)',
      },
      success: {
        50: 'var(--color-success-50)',
        100: 'var(--color-success-100)',
        200: 'var(--color-success-200)',
        300: 'var(--color-success-300)',
        400: 'var(--color-success-400)',
        500: 'var(--color-success-500)',
        600: 'var(--color-success-600)',
        700: 'var(--color-success-700)',
        800: 'var(--color-success-800)',
        900: 'var(--color-success-900)',
      },
      warning: {
        50: 'var(--color-warning-50)',
        100: 'var(--color-warning-100)',
        200: 'var(--color-warning-200)',
        300: 'var(--color-warning-300)',
        400: 'var(--color-warning-400)',
        500: 'var(--color-warning-500)',
        600: 'var(--color-warning-600)',
        700: 'var(--color-warning-700)',
        800: 'var(--color-warning-800)',
        900: 'var(--color-warning-900)',
      },
      danger: {
        50: 'var(--color-danger-50)',
        100: 'var(--color-danger-100)',
        200: 'var(--color-danger-200)',
        300: 'var(--color-danger-300)',
        400: 'var(--color-danger-400)',
        500: 'var(--color-danger-500)',
        600: 'var(--color-danger-600)',
        700: 'var(--color-danger-700)',
        800: 'var(--color-danger-800)',
        900: 'var(--color-danger-900)',
      },
      info: {
        50: 'var(--color-info-50)',
        100: 'var(--color-info-100)',
        200: 'var(--color-info-200)',
        300: 'var(--color-info-300)',
        400: 'var(--color-info-400)',
        500: 'var(--color-info-500)',
        600: 'var(--color-info-600)',
        700: 'var(--color-info-700)',
        800: 'var(--color-info-800)',
        900: 'var(--color-info-900)',
      },
      urge: {
        50: 'var(--color-urge-50)',
        100: 'var(--color-urge-100)',
        200: 'var(--color-urge-200)',
        300: 'var(--color-urge-300)',
        400: 'var(--color-urge-400)',
        500: 'var(--color-urge-500)',
        600: 'var(--color-urge-600)',
        700: 'var(--color-urge-700)',
        800: 'var(--color-urge-800)',
        900: 'var(--color-urge-900)',
      },
    },
    fontFamily: {
      primary: 'var(--family-primary)',
      secondary: 'var(--family-secondary)',
      sans: 'var(--family-sans)',
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
    },
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
      boxShadow: {
        'outline-gray': 'var(--box-shadow-outline-gray)',
        'outline-primary': 'var(--box-shadow-outline-primary)',
        'outline-success': 'var(--box-shadow-outline-success)',
        'outline-danger': 'var(--box-shadow-outline-danger)',
        'outline-warning': 'var(--box-shadow-outline-warning)',
        'outline-info': 'var(--box-shadow-outline-info)',
        'outline-urge': 'var(--box-shadow-outline-urge)',
      },
      maxWidth: {
        'min-content': 'min-content',
        'max-content': 'max-content',
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
      },
      maxHeight: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
      },
      minWidth: {
        'min-content': 'min-content',
        'max-content': 'max-content',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '4/5': '80%',
      },
      minHeight: {
        'min-content': 'min-content',
        'max-content': 'max-content',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '4/5': '80%',
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
  future: {
    removeDeprecatedGapUtilities: true,
  },
  experimental: {
    extendedSpacingScale: true,
    extendedFontSizeScale: true,
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-aspect-ratio'),
    plugin(({ addUtilities, addVariant, e, theme, prefix, variants }) => {
      const escape = e || ((x) => x);

      ['after', 'backdrop ', 'before', 'cue', 'first-letter', 'first-line', 'grammar-error ', 'marker ', 'placeholder ', 'selection'].forEach(
        (pseudo) => {
          addVariant(pseudo, ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
              return `.${escape(`${pseudo}${separator}${className}`)}::${pseudo}`;
            });
          });
        },
      );

      addVariant('important', ({ container }) => {
        container.walkRules((rule) => {
          rule.selector = `.\\!${rule.selector.slice(1)}`;
          rule.walkDecls((decl) => {
            decl.important = true;
          });
        });
      });

      addUtilities(
        {
          '.empty-content': {
            content: "''",
          },
        },
        ['before'],
      );

      addUtilities(
        {
          '.col-span-full': {
            'grid-column': '1 / -1',
          },
        },
        ['responsive'],
      );

      addUtilities(
        {
          '.hide': {
            display: 'none',
          },
          '.show': {
            display: 'block',
          },
        },
        ['responsive', 'important'],
      );
    }),
  ],
};
