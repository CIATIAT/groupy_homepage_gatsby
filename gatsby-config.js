const { ACCESS_TOKEN, SPACE_ID, ANALYTICS_ID } = process.env;

const plugins = [
  {
    resolve: `gatsby-theme-mate`,
    options: {
      accessToken: CONTENTFUL_DELIVERY_TOKEN,
      spaceId: CONTENTFUL_SPACE_ID,
    },
  },
];

if (ANALYTICS_ID) {
  plugins.push({
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: ANALYTICS_ID,
    },
  });
}

module.exports = {
  plugins,
};
