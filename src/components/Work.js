import React, { Component, Fragment } from 'react';

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
      works: works,
      activeIndex: 0
    }
    this.setActiveWork = this.setActiveWork.bind(this);
    this.checkActive = this.checkActive.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.focusActiveButton = this.focusActiveButton.bind(this);
  }

  setActiveWork(index) {
    this.setState({
      activeIndex: index
    })
  }

  focusActiveButton(direction) {
    const currentIndex = this.state.activeIndex;
    const totalWorks = this.state.works.length;
    const refs = Object.keys(this.refs);

    let nextItem;
    switch(direction) {
      case 'prev':
        const prev = currentIndex > 0 ? currentIndex - 1 : totalWorks - 1
        nextItem = refs[prev];
        break;
      case 'next':
        const next = currentIndex < totalWorks - 1 ? currentIndex + 1 : 0
        nextItem = refs[next];
        break;
    }

    // make all other buttons unfocusable
    refs.forEach(ref => {
      this.refs[ref].setAttribute('tabIndex', '-1');
    })
    const activeRef = this.refs[nextItem];
    // make next button focusable
    activeRef.setAttribute('tabindex', '0');
    activeRef.focus();
  }

  handleKeyUp(e) {
    const keyCode = e.keyCode;

    switch (keyCode) {
      case 37:
        this.focusActiveButton('prev');
        break;
      case 39:
        this.focusActiveButton('next');
        break;
    }
  }


  checkActive(node, activeIndex) {
    return node.title == this.state.works[activeIndex].title;
  }

  render() {
    const { activeIndex, works } = this.state;
    return (
      <Fragment>
        <h2 className="text-4xl mb-4 md:text-center">Recent Work</h2>
        <div className="flex justify-between flex-wrap" role="tablist">
          {works.map( (work, index) => {
            const isActive = this.checkActive(work, activeIndex)
            const css = isActive ? 'button-small active' : 'button-small'
            const selected = isActive || false;
            return (
              <button
                ref={work.id}
                className={css}
                aria-selected={selected}
                aria-controls={work.id}
                tabIndex={isActive ? '0' : '-1'}
                key={work.id}
                id={work.title}
                role="tab"
                onFocus={() => this.setActiveWork(index)}
                onClick={() => this.setActiveWork(index)}
                onKeyUp={ event => this.handleKeyUp(event)}
                >
                {work.title}
              </button>
            )
          })}
        </div>
        <div role="alert" aria-live="polite" className="mt-8">
          {works.map( work => {
            const isActive = this.checkActive(work, activeIndex);
            const activeClass = 'flex flex-col md:flex-row';
            return (
              <div
                key={work.image}
                tabIndex={isActive ? '0' : '-1'}
                aria-hidden={isActive ? 'false' : 'true'}
                role="tabpanel"
                aria-labelledby={work.title}
                className={isActive ? activeClass : ''}
                id={work.id}>
                <div className="md:w-3/5 pb-4 md:pr-8" >
                  <h3 className="text-2xl mb-4">{work.title}</h3>
                  <p className="mb-4">{work.description}</p>
                  {work.url !== null && (
                    <CustomLink to={work.url} external={true}>See this project</CustomLink>
                  )}
                </div>
                <div className="md:w-2/5 flex flex-col justify-center">
                  <img src={work.image} className="shadow" alt={work.title} />
                </div>
              </div>
            );
          })}
        </div>
      </Fragment>
    );
  }
}

const getWorks = () => {
  return [
    {
      image: ipom,
      id: 'ipom',
      title: 'In Pursuit Of More',
      description: 'A consulting project for a fantastic food and lifestyle blog, IPOM was a total rebuild - with a new design, I did both the front-end and the WordPress back-end, greatly improving load times and overall site speed.',
      url: 'http://inpursuitofmore.com/'
    },
    {
      image: sf,
      id: 'sf',
      title: 'Samuel French',
      description: 'The leader of the front-end team for this project for Engine Digital, I was responsible for the front-end on this e-commerce project for Samuel French. Most notable was the complex Vue integration managing user logins, comment systems, shopping carts, and the vast product catalog.',
      url: 'https://www.samuelfrench.com/'
    },
    {
      image: credential,
      id: 'credential',
      title: 'Credential Direct',
      description: 'Another Engine Digital project, Credential Direct was a top-to-bottom WordPress build. As the lead developer, I built out the front-end, as well as the WordPress integration, including JavaScript features using the WordPress REST API. Update: it appears to have been acquired, so the site is no longer up so no link is provided. ',
      url: null
    },
    {
      image: vct,
      id: 'vct',
      title: 'Vancouver Civic Theatres',
      description: 'Beautifully designed at Engine Digital, this project was front-end only. As the lead developer for this VCT project, I handled all of the usual suspects in the front end: HTML, CSS, and JavaScript. This includes some complex tools like a venue availability calendar and rental estimator.',
      url: 'https://vancouvercivictheatres.com/'
    }
  ];
}

export default Work;