const { ACCESS_TOKEN, SPACE_ID, GA4ANALYTICS_ID } = process.env;

const plugins = [
  {
    resolve: `gatsby-theme-mate`,
    options: {
      accessToken: ACCESS_TOKEN,
      spaceId: SPACE_ID
    }
  },
  `gatsby-plugin-image`,
  `gatsby-transformer-sharp`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`
    }
  },
  `gatsby-plugin-sharp`,
  {
     resolve: 'gatsby-plugin-google-gtag',
     options: {
       trackingIds: [GA4ANALYTICS_ID],
       pluginConfig: {
         head: true,
       },
     },
    }
];

module.exports = {
  plugins
};
