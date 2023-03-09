const path = require("path");
const { getLoader, loaderByName } = require("@craco/craco");
const CracoEnvPlugin = require("craco-plugin-env");

const packages = [];
console.log(__dirname);
packages.push(path.join(__dirname, "../models"));

module.exports = {
  webpack: {
    configure: (webpackConfig, arg) => {
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName("babel-loader")
      );
      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];

        match.loader.include = include.concat(packages);
      }
      return webpackConfig;
    },
  },
  plugins: [
    {
      plugin: CracoEnvPlugin,
      options: {
        variables: {
          BASE_URL:""
        },
      },
    },
  ],
};
