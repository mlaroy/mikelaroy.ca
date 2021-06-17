import React, { Component, Fragment } from 'react'

import styled from 'styled-components'
import Layout from '../components/layout'
// import Image from '../components/image'
import ContactForm from '../components/ContactForm'
import Section from '../components/Section'
import Split from '../components/Split'
import LatestPost from '../components/latestPost'
// import BlogTeaser from '../components/BlogTeaser'
import Work from '../components/Work'
import CustomLink from '../components/CustomLink';
import LogoGarden from '../components/LogoGarden';
import portrait from '../images/portrait.jpg';
// import portrait_square from '../images/portrait-square.jpg';
import headshot_square from '../images/headshot.jpg';
import headshot from '../images/headshot_large.jpg';
import CascadiaCallout from '../components/CascadiaCallout';

const Narrow = styled.div`
  max-width: 960px;
  margin: 0 auto;
  ${tw`px-8 py-24 h-full flex flex-col justify-center container`};
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
        <header className="pt-12 md:py-24 sm:mb-8 container md:flex bg-1">
          <div className="p-8 md:pl-4 md:pr-16 md:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight">
              Hi, I’m <span className="text-blue">Michael LaRoy</span>, <br className="hidden md:block" />
              a web development consultant in
              Abbotsford, British Columbia
              <span className="text-sm block font-normal mt-2"> (that's near Vancouver) </span>
            </h2>
            {/* <CustomLink classes="button mx-auto text-blue-dark mt-16" to="/blog">Read some of my thoughts &rarr;</CustomLink> */}
          </div>
          <CascadiaCallout />
        </header>
        <Section classes="bg-2">
          <Narrow>
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/3 max-w-xs flex flex-col justify-center">
                <picture>
                  <source srcSet={headshot} media="(min-width: 768px)" />
                  <img src={headshot_square} alt="Michael LaRoy" className="block shadow-lg rounded"/>
                </picture>
              </div>
              <div className="w-full sm:w-2/3 mt-16 sm:mt-0 sm:ml-16 md:ml-32 flex flex-col justify-center">
                <h3 className="text-2xl md:text-4xl mb-16 section-heading section-heading--inverted"> Nice to meet you</h3>
                <p className="text-md md:text-xl mb-4">
                  I am a front-end developer with over 8 years experience, and I love to build projects in Gatsby, WordPress, Vue, React, and other platforms.
                </p>
                <p className="text-md md:text-xl mb-4">
                  I also enjoy playing music, riding motorcycles, nerding out on coffee, and spending time with my family.
                </p>
                <p className="text-md md:text-xl">
                  I am the founder of the micro-agency <a href="https://cascadia.digital" className="transition">Cascadia Digital</a>, and you can also find me over on <a href="https://twitter.com/laroymike" className="transition">twitter</a>.
                </p>
              </div>
            </div>
          </Narrow>
        </Section>
        {/* <Section classes="bg-white">
          <Narrow>
            <Work />
          </Narrow>
        </Section> */}
        {/* <Split left={left} right={right} /> */}

        <Section classes="bg-1">
          <Narrow>
            {left}
          </Narrow>
        </Section>

        <Section classes="bg-2" id="about">
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
              I work typically as a front-end developer - my experience working in agencies, with clients large and small has given me the tools I need
              to help you as a consultant with your project. I'd love to hear from you and see how we can
              work together to build something great!
            </p>
            <p className="text-base md:text-xl mt-4 mb-4">
              Looking for a resume? See me on <a href="https://linkedin.com/in/laroymike" className="transition">LinkedIn</a>
            </p>
          </Narrow>
        </Section>
        {/* <Section classes="bg-1">
          <Narrow>
            <LogoGarden />
          </Narrow>
        </Section> */}
        <Section classes="bg-1" id="contact">
          <Narrow>
            <h2 className="text-2x md:text-5xl section-heading ">Contact</h2>
            <p className="text-base md:text-xl mt-4 mb-4">For rates, engagements, or questions, get in touch.</p>
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
      <h3 className="text-2xl md:text-4xl section-heading section-heading--inverted">Latest thoughts</h3>
      <LatestPost />
    </Fragment>
  );
};

const splitRight = () => {
  return (
    <aside>
      <h3 className="text-2xl md:text-4xl section-heading section-heading--inverted text-shadow">Nerd Zone</h3>
      <p className="text-base md:text-xl mb-4">
        This site was built with Gatsby (React), Tailwind CSS, and is hosted on <a href="https://www.netlify.com/" className="text-white hover:text-blue">Netlify</a>.
      </p>
      <p className="text-base md:text-xl">
        Fonts come from Google fonts - Copse (serif) for headings, and Roboto (sans-serif) for body text.
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
