import React from 'react'

import Layout from '../components/layout'
import Section from '../components/Section'
import CustomLink from '../components/CustomLink'

const NotFound = () => (
  <Layout>
    <Section classes="container p-24 text-center flex items-center justify-center">
      <div>
        <h1 className="text-4xl mb-4">NOT FOUND</h1>
        <p className="text-xl mb-4">That page doesn't exist 😕</p>
        <CustomLink to="/">Home</CustomLink>
      </div>
    </Section>
  </Layout>
)

export default NotFound
