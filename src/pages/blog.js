import React from 'react'
import Archive from '../components/archive'
import Layout from '../components/layout'
import Section from '../components/Section'

const Success = () => (
  <Layout>
    <Section css="container p-8">
      <h1 className="text-4xl mb-4 section-heading">Blog</h1>
    </Section>
    <Section css="container p-8">
      <Archive />
    </Section>
  </Layout>
)

export default Success
