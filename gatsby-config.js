const { ACCESS_TOKEN, SPACE_ID, ANALYTICS_ID } = process.env;

const plugins = [
  {
    resolve: "gatsby-theme-mate",
    options: {
      accessToken: ACCESS_TOKEN,
      spaceId: SPACE_ID
    }
  },
  "gatsby-plugin-image",
  "gatsby-transformer-sharp",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "images",
      path: `${__dirname}/src/images`
    }
  },
  "gatsby-plugin-sharp",
  "gatsby-plugin-breakpoints"
];

if (ANALYTICS_ID) {
  plugins.push({
    resolve: "gatsby-plugin-google-analytics",
    options: {
      trackingId: ANALYTICS_ID
    }
  });
}

module.exports = {
  plugins
};
