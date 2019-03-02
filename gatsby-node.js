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
        allMarkdownRemark(
          limit: 1000
          sort: {
            order: DESC
            fields: [frontmatter___date]
          }) {
          edges {
            node {
              frontmatter {
                slug
                title
              }
            }
          }
        }
      }
    `).then(results => {
      const posts = results.data.allMarkdownRemark.edges;
      posts.forEach( ({node}, index) => {
        const previous = index === posts.length - 1 ? null : posts[index + 1].node
        const next = index === 0 ? null : posts[index - 1].node
        createPage({
          path: `/blog${node.frontmatter.slug}`,
          component: path.resolve('./src/components/postLayout.js'),
          context: {
            slug: node.frontmatter.slug,
            previous,
            next
          }
        })
        resolve();
      })
    })
  });
}