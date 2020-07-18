module.exports = {
  plugins: [
    ["postcss-easy-import", { prefix: "string" }],
    "postcss-import",
    "postcss-each",
    "tailwindcss",
    "postcss-preset-env",
    "postcss-nested",
  ],
};
