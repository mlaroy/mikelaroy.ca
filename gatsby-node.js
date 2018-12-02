/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');

exports.createPages = ({ graphql, actions}) => {

  const { createPage, createRedirect } = actions;
  createRedirect({
    fromPath: `/about`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/#about`,
  });

  createRedirect({
    fromPath: `/general`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/blog`,
  })

  return new Promise( (resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `).then(results => {
      const { edges } = results.data.allMarkdownRemark;
      edges.forEach( ({node}) => {
        createPage({
          path: `/blog${node.frontmatter.slug}`,
          component: path.resolve('./src/components/postLayout.js'),
          context: {
            slug: node.frontmatter.slug
          }
        })
        resolve();
      })
    })
  });
}