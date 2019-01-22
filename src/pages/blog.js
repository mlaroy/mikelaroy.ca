import React from 'react'
import styled from 'styled-components'
import Archive from '../components/archive'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Section from '../components/Section'
import Helmet from 'react-helmet'

const Narrow = styled.div`
  max-width: 960px;
  margin: 0 auto;
  ${tw`px-8 py-8 h-full flex flex-col justify-center`};
`

const Success = props => (
  <Layout>
    <Helmet
      title={`Blog | ${props.data.site.siteMetadata.title}`}
    >
    </Helmet>
    <Section css="container">
      <Narrow>
        <h1 className="text-3xl md:text-5xl mb-4 section-heading">Blog</h1>
      </Narrow>
    </Section>
    <Section css="container">
      <Narrow>
        <Archive />
      </Narrow>
    </Section>
  </Layout>
)

export default Success

export const query = graphql`
  query BlogPageQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
}`
