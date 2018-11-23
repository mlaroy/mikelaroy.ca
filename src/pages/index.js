import React, { Component } from 'react'

import styled from 'styled-components'
import Layout from '../components/layout'
// import Image from '../components/image'
import ContactForm from '../components/ContactForm'
import Section from '../components/Section'
import Split from '../components/Split'
import Work from '../components/Work'

const Narrow = styled.div`
  max-width: 860px;
  margin: 0 auto;
  ${tw`px-8 py-16 h-full flex flex-col justify-center`};
`

const Hero = styled.div`
  ${tw`py-8`}
`

class IndexPage extends Component {
  render() {
    const left = splitLeft();
    const right = splitRight();
    return (
      <Layout>
        <Hero>
          <h2 className="text-2xl md:text-6xl px-8 md:p-32 text-center leading-tight">
            Howdy! I'm Michael LaRoy, <br />
            a web development consultant in <br />
            Abbotsford, British Columbia
            <span className="text-sm block font-normal text-center">(that's near Vancouver)</span>
          </h2>
        </Hero>
        <Section css="bg-grey-lighter">
          <Narrow>
            <Work />
          </Narrow>
        </Section>
        <Split left={left} right={right} />
        <Section css="bg-white">
          <Narrow>
            <h2 className="text-5xl section-heading" id="about">About</h2>
            <p className="text-xl mt-4 mb-4">
              While my discipline may be writing code and building websites, my passion is problem solving.
              Sometimes that problem is in the browser, and sometimes that's where it's solved. My goals and
              yours are the same - to get your problems solved!
            </p>
            <p className="text-xl mt-4 mb-4">
              I aim to make things easy for you, the client. While the ecosystem of web technologies is vast and
              complex, that doesn't mean in needs to be hard for you. Ultimately you shoudn't need to worry
              whether I'm using React or Vue, JavaScript or PHP, or WordPress or whatever else to get you
              where you need to go - at the end of the day, you just need it to work.
            </p>
            <p className="text-xl mt-4 mb-4">
              My experience working in agencies, with clients large and small has given me the tools I need
              to help you as a consultant with your project. I'd love to hear from you and see how we can
              work together to build something great!
            </p>
          </Narrow>
        </Section>
        <Section css="bg-grey-lighter">
          <Narrow>
            <h2 className="text-5xl section-heading " id="contact">Contact</h2>
            <p className="text-xl mt-4 mb-4">For rates, engagements, or questions, get in touch:</p>
            <ContactForm />
          </Narrow>
        </Section>
      </Layout>
    );
  }
}

const splitLeft = () => {
  return (
    <div className="py-4">
      <h2 className="text-4xl mb-4">Latest thoughts</h2>
      <article>
        <h3 className="text-2xl">Some Title</h3>
        <p>Lorem Ipsum </p>
      </article>
    </div>
  )
}

const splitRight = () => {
  return (
    <aside className="py-4">
      <h3 className="text-4xl mb-4">Nerd Zone</h3>
      <p className="mb-4">
        This site was designed in the browser to be optimized for speed and simplicity.
        It was developed with React/Gatsby, and Tailwind CSS.
      </p>
      <p className="mb-4">
        Fonts come from Google fonts - Copse (serif) for headings, and Roboto (sans-serif) for body text.
      </p>
      <p>
        This site is hosted on Netlify, and uses deployment hooks with Github.
      </p>
    </aside>
  )
};

export default IndexPage
