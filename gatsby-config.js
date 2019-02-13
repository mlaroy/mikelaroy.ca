module.exports = {
  siteMetadata: {
    title: 'Michael LaRoy',
    author: 'Michael LaRoy',
    url: 'https://mikelaroy.ca',
    description: 'Front-End web development consultant in Abbotsford, BC.',
    keywords: 'JavaScript, React, Vue, CSS, WordPress, Gatsby, PHP, Laravel, Tailwind, Node, Abbotsford, Fraser Valley'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    'gatsby-plugin-tailwindcss',
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          // 'gatsby-remark-social-cards',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 970,
              linkImagesToOriginal: false
            },
          },
          {
            resolve: "@weknow/gatsby-remark-twitter",
            options: {
              debug: true
            }
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              noInlineHighlight: true,
            }
          }
        ],
      },
    },
    'gatsby-plugin-catch-links',
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        ignore: 'node_modules/prismjs/themes/prism-okaidia.css',
        whitelist: [
          '.article-body .gatsby-resp-image-wrapper',
          '.gatsby-highlight',
          '.language-js',
          'pre',
          'code',
          '.token',
          '.token.comment',
          '.token.prolog',
          '.token.doctype',
          '.token.cdata',
          '.token.punctuation',
          '.namespace',
          '.token.property',
          '.token.tag',
          '.token.constant',
          '.token.symbol',
          '.token.deleted',
          '.token.boolean',
          '.token.number',
          '.token.selector',
          '.token.attr-name',
          '.token.string',
          '.token.char',
          '.token.builtin',
          '.token.inserted',
          '.token.operator',
          '.token.entity',
          '.token.url',
          '.language-css .token.string',
          '.style .token.string',
          '.token.variable',
          '.token.atrule',
          '.token.attr-value',
          '.token.function',
          '.token.class-name',
          '.token.keyword',
          '.token.regex',
          '.token.important',
          '.token.important',
          '.token.bold',
          '.token.italic',
          '.token.entity',
          '.keyword',
          '.operator',
          '.punctuation',
          '.class-name',
          '.comment',
          '.string'
        ], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-39603316-3",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Any additional create only fields (optional)
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "mikelaroy.ca",
      }
    },
    'gatsby-plugin-netlify'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
}
