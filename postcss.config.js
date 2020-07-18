module.exports = {
  plugins: [
    ["postcss-easy-import", { prefix: "string" }],
    "postcss-import",
    "postcss-each",
    "tailwindcss",
    "postcss-nested",
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
      },
    ],
  ],
};
