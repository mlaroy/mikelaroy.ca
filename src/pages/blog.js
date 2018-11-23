import React from 'react'

import Layout from '../components/layout'
import Section from '../components/Section'
import BlogTeaser from '../components/BlogTeaser'

const Success = () => (
  <Layout>
    <Section css="container p-8">
      <h1 className="text-4xl mb-4 section-heading">Blog</h1>
    </Section>
    <Section css="container p-8">
      <BlogTeaser />
      <BlogTeaser />
      <BlogTeaser />
    </Section>
  </Layout>
)

export default Success
