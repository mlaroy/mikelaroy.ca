import React, { Component } from 'react';
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from './layout'
import Section from './Section'
import Signature from './signature'
import Helmet from 'react-helmet'

const Narrow = styled.div`
  max-width: 960px;
  margin: 0 auto;
  ${tw`px-8 py-8 h-full flex flex-col justify-center`};
`
class postLayout extends Component {
  render() {
    const { markdownRemark, site } = this.props.data;
    const { html, timeToRead, excerpt } = markdownRemark;
    const { date, title } = markdownRemark.frontmatter

    return (
      <Layout>
        <Helmet
          title={`${title} | ${site.siteMetadata.title}`}
          meta={[
            { name: 'description', content: excerpt }
          ]}
        >
        </Helmet>
        <Section css="container">
          <Narrow>
            <h1 className="text-3xl md:text-5xl section-heading">{title}</h1>
            <p className="pb-4 text-sm">
              <time className="inline-block pr-4">{date}</time> | <span className="inline-block pl-4">Read time: {timeToRead} min</span>
            </p>
            <hr className="border border-b-1 border-grey-light block w-full mb-16"/>
            <div className="article-body" dangerouslySetInnerHTML={{
              __html: html
            }}></div>
            <div className="mt-8">
              <Signature />
            </div>
          </Narrow>
        </Section>

      </Layout>
    );
  }
}

export const query = graphql`
  query PostQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
    markdownRemark(frontmatter: {
      slug: {
        eq: $slug
      }
    }) {
      html
      timeToRead,
      excerpt,
      frontmatter {
        title
        slug
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

export default postLayout;