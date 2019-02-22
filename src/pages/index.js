import React, { Component, Fragment } from 'react'

import styled from 'styled-components'
import Layout from '../components/layout'
// import Image from '../components/image'
import ContactForm from '../components/ContactForm'
import Section from '../components/Section'
import Split from '../components/Split'
import LatestPost from '../components/latestPost'
import BlogTeaser from '../components/BlogTeaser'
import Work from '../components/Work'
import CustomLink from '../components/CustomLink';
import portrait from '../images/portrait.jpg';
import portrait_square from '../images/portrait-square.jpg';

const Narrow = styled.div`
  max-width: 960px;
  margin: 0 auto;
  ${tw`px-8 py-24 h-full flex flex-col justify-center`};
`

const Hero = styled.div`
  ${tw`py-8 md:text-center mb-8`}
`

class IndexPage extends Component {
  state = {
    hasJS: false
  }
  componentDidMount() {
    this.addBodyClass();
  }
  addBodyClass() {
    if(typeof window !== 'undefined'){
      const body = document.body;
      body.classList.add('js');
      this.setState({
        hasJS: true
      })
    }
  }
  render() {
    const left = splitLeft();
    const right = splitRight();
    return (
      <Layout>
        <Hero>
          <div className="px-8 py-12 sm:py-16 md:px-32 md:pt-32 md:pb-8">
            <h2 className="text-2xl md:text-4xl lg:text-6xl leading-tight">
              Howdy! I'm Michael LaRoy, <br class="hidden md:block" />
              a web development consultant in <br class="hidden md:block"  />
              Abbotsford, British Columbia
              <span className="text-sm block font-normal">(that's near Vancouver)</span>
            </h2>
            <CustomLink css="button mx-auto text-blue-dark mt-16" to="/blog">Read some of my thoughts &rarr;</CustomLink>
          </div>
        </Hero>
        <Section css="bg-blue text-white">
          <Narrow>
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/3 max-w-xs flex flex-col justify-center">
                <picture>
                  <source srcSet={portrait} media="(min-width: 768px)" />
                  <img src={portrait_square} alt="Michael LaRoy" className="block shadow-lg rounded"/>
                </picture>
              </div>
              <div className="w-full sm:w-2/3 mt-16 sm:mt-0 sm:ml-16 md:ml-32 flex flex-col justify-center">
                <h3 className="text-2xl md:text-4xl mb-16 section-heading section-heading--inverted text-shadow"> Nice to meet you</h3>
                <p className="text-md md:text-xl mb-4">
                  I love hearing from new people and potential partners, so if you are looking for a reliable and creative developer,
                  please get in touch below. I love to build in Gatsby, WordPress, Statamic, and other platforms.
                </p>
                <p className="text-md md:text-xl">
                  You can also find me over on <a href="https://twitter.com/laroymike" className="text-blue hover:text-orange transition">twitter</a>.
                </p>
              </div>
            </div>
          </Narrow>
        </Section>
        <Section css="bg-white">
          <Narrow>
            <Work />
          </Narrow>
        </Section>
        <Split left={left} right={right} />
        <Section css="bg-white"  id="about">
          <Narrow>
            <h2 className="text-2xl md:text-5xl section-heading">About</h2>
            <p className="text-base md:text-xl mt-4 mb-4">
              While my discipline may be writing code and building websites, my passion is problem solving.
              Sometimes that problem is in the browser, and sometimes that's where it's solved. My goals and
              yours are the same - to get your problems solved!
            </p>
            <p className="text-base md:text-xl mt-4 mb-4">
              I aim to make things easy for you, the client. While the ecosystem of web technologies is vast and
              complex, that doesn't mean it needs to be hard for you. Ultimately you shoudn't need to worry
              whether I'm using React or Vue, JavaScript or PHP, or WordPress or Laravel, or whatever else to get you
              where you need to go - at the end of the day, you just need it to work.
            </p>
            <p className="text-base md:text-xl mt-4 mb-4">
              My experience working in agencies, with clients large and small has given me the tools I need
              to help you as a consultant with your project. I'd love to hear from you and see how we can
              work together to build something great!
            </p>
          </Narrow>
        </Section>
        <Section css="bg-grey-lighter" id="contact">
          <Narrow>
            <h2 className="text-2x md:text-5xl section-heading ">Contact</h2>
            <p className="text-base md:text-xl mt-4 mb-4">For rates, engagements, or questions, get in touch. Check out these {" "}
            <CustomLink to="/blog/guidelines-webdesign-request-proposal">guidelines</CustomLink> for RFPs.</p>
            {renderContactForm(this.state)}
          </Narrow>
        </Section>
      </Layout>
    );
  }
}

const splitLeft = () => {
  return (
    <Fragment>
      <h3 className="text-2xl md:text-4xl section-heading section-heading--inverted text-shadow">Latest thoughts</h3>
      <LatestPost />
    </Fragment>
  );
};

const splitRight = () => {
  return (
    <aside>
      <h3 className="text-2xl md:text-4xl section-heading section-heading--inverted text-shadow">Nerd Zone</h3>
      <p className="text-base md:text-xl mb-4">
        This site was designed in the browser with React/Gatsby, and Tailwind CSS.
      </p>
      <p className="text-base md:text-xl mb-4">
        Fonts come from Google fonts - Copse (serif) for headings, and Roboto (sans-serif) for body text.
      </p>
      <p className="text-base md:text-xl">
        This site is hosted on Netlify, and is deployed from {" "}
        <CustomLink to="https://github.com/mlaroy/mikelaroy.ca" css="text-white hover:text-blue" external={true}>Github</CustomLink>.
      </p>
    </aside>
  )
};

export default IndexPage;

const renderContactForm = ({hasJS}) => {
  if(!hasJS) {
    return (
      <noscript>This form requires JavaScript, sorry!</noscript>
    );
  } else {

    return (
      <ContactForm />
    );
  }
}
