import React from 'react'
import styled from 'styled-components'
import Archive from '../components/archive'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Section from '../components/Section'
import Helmet from 'react-helmet'
import getIcon from '../components/icons';

const Narrow = styled.div`
  max-width: 960px;
  margin: 0 auto;
  position: relative;
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
        <h1 className="text-3xl md:text-5xl mb-4 section-heading">
          Blog
        </h1>
        <hr/>
        <p className="text-sm mb-0 pt-12 md:absolute md:mr-4 pin-t pin-r">
          <a href="https://mikelaroy.ca/rss.xml">RSS {getIcon('rss', '10')}</a>
        </p>
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
