const withImages = require("next-images");

module.exports = withImages({
  i18n: {
    locales: ["en", "fr", "es"],
    defaultLocale: "en",
  },
  future: {
    webpack5: true,
  },
});
