import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import BlogTeaser from '../components/BlogTeaser'

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({allMarkdownRemark}) => (
      <>
        {allMarkdownRemark.edges.map(edge =>
          <BlogTeaser key={edge.node.frontmatter.slug} post={edge} linkColor="text-blue" />)
        }
      </>
    )}
  />
)

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(limit: 100, sort: {
      order: DESC
      fields: [frontmatter___date]
    })
    {
      totalCount
      edges {
        node {
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            slug
          }
        }
      }
    }
  }
`

export default Archive
