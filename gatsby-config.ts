import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Sahil Personal`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sitemap", 
  {
    resolve: "gatsby-plugin-google-gtag",
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: [
        "G-5VDMR5DN8B", // Google Analytics / GA4
        // "AW-CONVERSION_ID", other IDs can be added here
        // "DC-FLOODIGHT_ID",
      ],
      // This object gets passed directly to the gtag config command
      // This config will be shared across all trackingIds
      gtagConfig: {
        optimize_id: "OPT_CONTAINER_ID",
        anonymize_ip: true,
        cookie_expires: 0,
      },
      // This object is used for configuration specific to this plugin
      pluginConfig: {
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
    },
  },
  
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};

export default config;
