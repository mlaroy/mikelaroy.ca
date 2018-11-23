import React from 'react'

import Layout from '../components/layout'
import Section from '../components/Section'
import CustomLink from '../components/CustomLink'

const NotFound = () => (
  <Layout>
    <Section css="container p-8 text-center">
      <h1 className="text-4xl mb-4">NOT FOUND</h1>
      <p className="text-xl mb-4">That page doesn't exist 😕</p>
      <CustomLink to="/">Home</CustomLink>
    </Section>
  </Layout>
)

export default NotFound
