import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'
import Layout from '../components/layout'
// import Image from '../components/image'
import Bumper from '../components/Bumper'
import CustomLink from '../components/CustomLink'
import ContactForm from '../components/ContactForm'
import Section from '../components/Section'

const Narrow = styled.div`
  max-width: 780px;
  margin: 0 auto;
  ${tw`px-8 py-16 h-full flex flex-col justify-center`};
`

const Hero = styled.div`
  ${tw`p-5`}
`

const IndexPage = () => (
  <Layout>
    <Hero>
      <h2 className="text-2xl md:text-6xl p-8 md:p-32 text-center">
        Howdy! I'm Michael LaRoy, <br />
        a web development consultant in <br />
        Abbotsford, British Columbia
        <span className="text-sm block font-normal text-center">(that's near Vancouver)</span>
      </h2>
      <ul className="flex list-reset text-center justify-center pb-16">
        <li class="mx-4"><CustomLink icon="github" to="https://github.com/mlaroy" external="true"></CustomLink></li>
        <li class="mx-4"><CustomLink icon="linkedin" to="https://linkedin.com/in/mike.laroy" external="true"></CustomLink></li>
        <li class="mx-4"><CustomLink icon="twitter" to="https://twitter.com/laroymike" external="true"></CustomLink></li>
      </ul>
    </Hero>
    <Bumper>
      <p className="text-2xl">If you need help with WordPress, React, Vue, Accessiblity and more, I'm your guy.</p>
      <Link to="#contact" className="px-8 py-4 rounded bg-white mt-4 no-underline inline-block">Get in touch</Link>
    </Bumper>
    <Section css="bg-white">
      <Narrow>
        <h2 className="text-5xl" id="about">About</h2>
        <p className="text-xl">Mike</p>
      </Narrow>
    </Section>
    <Section css="bg-grey-lighter">
      <Narrow>
        <h2 className="text-5xl" id="contact">Contact</h2>
        <p className="text-xl mt-4 mb-4">For quotes, engagements, or questions! Get in touch:</p>
        <ContactForm />
      </Narrow>
    </Section>
  </Layout>
)

export default IndexPage
