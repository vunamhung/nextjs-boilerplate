const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');

module.exports = withPlugins([withFonts], {
  future: {
    webpack5: true,
  },
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    iconSizes: [],
    domains: [],
    path: '/_next/image',
    loader: 'default',
  },
});
