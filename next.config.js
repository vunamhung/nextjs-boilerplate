const withPlugins = require("next-compose-plugins");
const withFonts = require("next-fonts");
const withPWA = require("next-pwa")({
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV !== "production",
  },
});
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

module.exports = withPlugins([withOptimizedImages, withFonts, withBundleAnalyzer, withPWA]);
