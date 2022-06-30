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

module.exports = withPlugins([withBundleAnalyzer, withPWA]);
