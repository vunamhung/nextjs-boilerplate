const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa')({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV !== 'production',
    buildExcludes: [/static\/images\/.*$/]
  }
});
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = withPlugins([withBundleAnalyzer, withPWA], {
  webpack(config, { dev, isServer }) {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat'
      });
    }

    return config;
  }
});
