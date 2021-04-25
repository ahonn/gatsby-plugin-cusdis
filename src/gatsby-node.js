let didRunAlready = false;
let cusdisAppId = '';
let cusdisHost = '';

const DEFAULT_CUSDIS_HOST = 'https://cusdis.com';

exports.onPreInit = function (_ref, pluginOptions) {
  delete pluginOptions.plugins;
  cusdisAppId = pluginOptions.appId;
  cusdisHost = pluginOptions.host || DEFAULT_CUSDIS_HOST;

  if (didRunAlready) {
    throw new Error(
      'You can only have single instance of gatsby-plugin-cusdis in your gatsby-config.js',
    );
  }
  didRunAlready = true;
};

exports.onCreateWebpackConfig = ({ plugins, actions }) => {
  const setWebpackConfig = actions.setWebpackConfig;
  setWebpackConfig({
    plugins: [
      plugins.define({
        GATSBY_CUSDIS_APP_ID: JSON.stringify(cusdisAppId),
        GATSBY_CUSDIS_HOST: JSON.stringify(cusdisHost),
      }),
    ],
  });
};
