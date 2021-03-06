require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
}

if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST
}

module.exports = {
  siteMetadata: {
    title: `Rosewood Chronicles`,
    titleTemplate: `%s | Rosewood Chronicles`,
    description: `Welcome to the official website for The Rosewood Chronicles book series. Here you can take a Rosewood Hall sorting quiz to find out your house, buy merchandise, learn more about the students, and even discover some deleted chapters and secrets. Enjoy your stay.`,
    siteUrl: `https://www.therosewoodchronicles.co.uk`,
    author: `@LukeBrobbin`,
    image: `/D_Site_Logo.png`,
    twitterUsername: `@connieglynn`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-184818636-1`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `the-rosewood-chronicles`,
        short_name: `Rosewood`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
