const withPlugins = require("next-compose-plugins");
const withFonts = require("next-fonts");
const withOptimizedImages = require("next-optimized-images")({
  mozjpeg: {
    quality: 90,
  },
  webp: {
    preset: "default",
    quality: 90,
  },
});
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withPlugins([withOptimizedImages, withFonts, withBundleAnalyzer]);
