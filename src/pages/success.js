import React from 'react'

import Layout from '../components/layout'
import Section from '../components/Section'
import CustomLink from '../components/CustomLink'

const SecondPage = () => (
  <Layout>
    <Section css="container p-8 text-center">
      <h1 className="text-4xl mb-4">Success!</h1>
      <p className="text-xl mb-4">Thanks for sending your message. I'll get back to you as soon as possible.</p>
      <CustomLink to="/">Home</CustomLink>
    </Section>
  </Layout>
)

export default SecondPage
