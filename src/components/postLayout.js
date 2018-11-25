import React, { Component } from 'react';
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from './layout'
import Section from './Section'

const Narrow = styled.div`
  max-width: 860px;
  margin: 0 auto;
  ${tw`px-8 py-8 h-full flex flex-col justify-center`};
`
class postLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data;
    const { html, timeToRead } = markdownRemark;
    const { date, title } = markdownRemark.frontmatter

    return (
      <Layout>
        <Section css="container">
          <Narrow>
            <h1 className="text-3xl md:text-5xl section-heading">{title}</h1>
            <p className="pb-4 text-sm">
            <time className="inline-block pr-4">{date}</time> | <span className="inline-block pl-4">Read time: {timeToRead} min</span>
            </p>
            <hr className="border b-t-grey-dark"/>
            <div className="article-body" dangerouslySetInnerHTML={{
              __html: html
            }}></div>
          </Narrow>
        </Section>

      </Layout>
    );
  }
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: {
      slug: {
        eq: $slug
      }
    }) {
      html
      timeToRead
      frontmatter {
        title
        slug
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

export default postLayout;