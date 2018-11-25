import React from 'react'
import styled from 'styled-components'
import Archive from '../components/archive'
import Layout from '../components/layout'
import Section from '../components/Section'

const Narrow = styled.div`
  max-width: 860px;
  margin: 0 auto;
  ${tw`px-8 py-8 h-full flex flex-col justify-center`};
`

const Success = () => (
  <Layout>
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
