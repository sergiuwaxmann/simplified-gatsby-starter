module.exports = {
  siteMetadata: {
    title: `Simplified Gatsby Starter`,
    description: `Kick off your next, great Gatsby project with this simplified starter.`,
    author: `@sergiuwaxmann`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
