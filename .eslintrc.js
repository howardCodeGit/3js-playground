const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");

module.exports = {
  ...require("./eslint.config.json"), // Assuming the JSON file is named eslint.config.json
  ...eslintPluginPrettierRecommended,
};
