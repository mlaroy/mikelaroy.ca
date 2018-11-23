import React, { Component } from 'react';

import sf from '../images/sf.png';
import vct from '../images/vct.png';
import credential from '../images/credential.png';
import ipom from '../images/ipom.png';
import CustomLink from './CustomLink';

class Work extends Component {
  constructor(props) {
    super(props);
    const works = getWorks();
    this.state = {
      active: works[0]
    }
    this.setActiveWork = this.setActiveWork.bind(this);
  }

  setActiveWork(work) {
    this.setState({
      active: work
    })
    console.log(this.state);
  }

  render() {
    const works = getWorks();
    const { active } = this.state;
    return (
      <div>
        <h2 className="text-4xl mb-4 md:text-center">Recent Work</h2>
        <div className="flex justify-between flex-wrap" role="tablist" aria-controls="work-container">
          {works.map( work => {
            const css = active.title === work.title ? 'button-small active' : 'button-small'
            return (
              <button
                className={css}
                key={work.image}
                onClick={ () => this.setActiveWork(work)}>
                {work.title}
              </button>
            )
          })}
        </div>
        <div role="alert" aria-live="polite" className="mt-8 flex flex-col md:flex-row" id="work-container">
          <div className="md:w-3/5 pb-4 md:pr-8">
            <h3 className="text-2xl mb-4">{active.title}</h3>
            <p className="mb-4">{active.description}</p>
            <CustomLink to={active.url} external={true}>See this project</CustomLink>
          </div>
          <div className="md:w-2/5 flex flex-col justify-center">
            <img src={active.image} className="shadow" />
          </div>
        </div>
      </div>
    );
  }
}

const getWorks = () => {
  return [
    {
      image: ipom,
      title: 'In Pursuit Of More',
      description: 'A consulting project for a fantastic food and lifestyle blog, IPOM was a total rebuild - with a new design, I did both the front-end and the WordPress back-end, greatly improving load times and overall site speed.',
      url: 'http://inpursuitofmore.com/'
    },
    {
      image: sf,
      title: 'Samuel French',
      description: 'The leader of the front-end team for this project for Engine Digital, I was responsible for the front-end on this e-commerce project for Samuel French. Most notable was the complex Vue integration managing user logins, comment systems, shopping carts, and the vast product catalog.',
      url: 'https://www.samuelfrench.com/'
    },
    {
      image: credential,
      title: 'Credential Direct',
      description: 'Another Engine Digital project, Credential Direct was a top-to-bottom WordPress build. As the lead developer, I built out the front-end, as well as the WordPress integration, including JavaScript features using the WordPress REST API.',
      url: 'https://credentialdirect.com/'
    },
    {
      image: vct,
      title: 'Vancouver Civic Theatres',
      description: 'Beautifully designed at Engine Digital, this project was front-end only. As the lead developer for this VCT project, I handled all of the usual suspects in the front end: HTML, CSS, and JavaScript. This includes some complex tools like a venue availability calendar and rental estimator.',
      url: 'https://vancouvercivictheatres.com/'
    }
  ];
}

export default Work;