//
// gatsby config file

const postCSSCustomProperties = require('postcss-custom-properties');

const postcss = {
  resolve: `gatsby-plugin-postcss-sass`,
  options: {
    postCssPlugins: [
      postCSSCustomProperties({
        variables: {}
      })
    ],
  },
};

module.exports = {
  siteMetadata: {
    title: 'Doomed',
  },
  plugins: [
    postcss,
    'gatsby-plugin-react-helmet',
  ],
};

