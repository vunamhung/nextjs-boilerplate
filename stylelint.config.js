module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-idiomatic-order'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen', 'layer', 'each'],
      },
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
  },
};
