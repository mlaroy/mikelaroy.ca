import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Section from '../components/Section'
import CustomLink from '../components/CustomLink'
import Helmet from 'react-helmet'

const Success = props => (
  <Layout>
    <Helmet
        title={`Success | ${props.data.site.siteMetadata.title}`} >
    </Helmet>
    <Section css="container p-8 text-center">
      <h1 className="text-4xl mb-4">Success!</h1>
      <p className="text-xl mb-4">Thanks for sending your message. I'll get back to you as soon as possible.</p>
      <CustomLink to="/">Home</CustomLink>
    </Section>
  </Layout>
)

export default Success


export const query = graphql`
  query SuccessPageQuery {
    site {
      siteMetadata {
        title
      }
    }
}`