import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'

import image from '../images/og.jpg';
import './layout.css'

const Layout = ({ children, description, title }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            keywords,
            url
          }
        }
      }
    `}
    render={data => {
      const metaDescription =
          description || data.site.siteMetadata.description
      const siteTitle =
          title || data.site.siteMetadata.title
      const url = data.site.siteMetadata.url
      return (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: metaDescription },
                { name: 'google-site-verification', content: process.env.GATSBY_GOOGLE_VERIFICATION_ID },
                { name: 'keywords', content: data.site.siteMetadata.keywords },
                {
                  property: `og:title`,
                  content: siteTitle,
                },
                {
                  property: `og:image`,
                  content: `https://mikelaroy.ca/static/og-fab26ba0f0fdb1208debc35481d52c88.jpg`,
                },
                {
                  property: `og:url`,
                  content: url,
                },
                {
                  property: `og:image:url`,
                  content: `http://mikelaroy.ca/static/og-fab26ba0f0fdb1208debc35481d52c88.jpg`,
                },
                {
                  property: `og:image:secure_url`,
                  content: `https://mikelaroy.ca/static/og-fab26ba0f0fdb1208debc35481d52c88.jpg`,
                },
                {
                  property: `og:image:type`,
                  content: `image/jpg`,
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
                  property: `og:image:width`,
                  content: `300`,
                },
                {
                  property: `og:image:height`,
                  content: `200`,
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
                }
              ]}
            >
              <html lang="en" />
            </Helmet>
            <div className="layout-grid bg-1">
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
