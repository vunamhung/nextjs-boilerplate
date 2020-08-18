const withPlugins = require("next-compose-plugins");
const withFonts = require("next-fonts");
const withPWA = require("next-pwa");
const withOptimizedImages = require("next-optimized-images");
const withBundleAnalyzer = require("@next/bundle-analyzer");

module.exports = withPlugins([
  withFonts,
  [
    withOptimizedImages,
    {
      mozjpeg: {
        quality: 90,
      },
      webp: {
        preset: "default",
        quality: 75,
      },
    },
  ],
  [
    withBundleAnalyzer,
    {
      enabled: process.env.ANALYZE === "true",
    },
  ],
  [
    withPWA,
    {
      pwa: {
        dest: "public",
        disable: process.env.NODE_ENV !== "production",
        buildExcludes: [/static\/images\/.*$/],
      },
    },
  ],
]);
