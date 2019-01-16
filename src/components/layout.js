import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'

import image from '../images/favicon.png';
import './layout.css'

const Layout = ({ children, description, title }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `}
    render={data => {
      const metaDescription =
          description || data.site.siteMetadata.description
      const siteTitle =
          title || data.site.siteMetadata.title
      return (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: metaDescription },
                { name: 'keywords', content: data.site.siteMetadata.keywords },
                {
                  property: `og:title`,
                  content: siteTitle,
                },
                {
                  property: `og:image`,
                  content: `http://mikelaroy.ca/icons/icon-512x512.png`,
                },
                {
                  property: `og:description`,
                  content: metaDescription,
                },
                {
                  property: `og:type`,
                  content: `website`,
                },
                {
                  name: `twitter:card`,
                  content: metaDescription,
                },
                {
                  name: `twitter:creator`,
                  content: data.site.siteMetadata.author,
                },
                {
                  name: `twitter:title`,
                  content: siteTitle,
                },
                {
                  name: `twitter:description`,
                  content: metaDescription,
                },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <div className="layout-grid bg-white">
              <Header siteTitle={data.site.siteMetadata.title} />
              <main>
                {children}
              </main>
              <Footer />
            </div>
          </>
        )
      }
    }
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
