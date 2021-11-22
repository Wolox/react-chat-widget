const path = require('path');


module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    {
      name: '@storybook/preset-scss',
      options: {
        sassLoaderOptions: {
          implementation: require('node-sass'),
          sassOptions: {
            includePaths: [path.resolve(__dirname, '../src/scss/')]
          }
        }
      }
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config, { configType }) => {
    // config.module.rules.push({
    //   test: /\.scss$/,
    //   use: ["style-loader", "css-loader", "sass-loader"],
    //   include: path.resolve(__dirname, "../")
    // });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]]
      }
    });
    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  }
}