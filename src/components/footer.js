import React, { Component } from 'react'
import CustomLink from '../components/CustomLink'

class Footer extends Component {

  backToTop() {
    console.log('up');
    window.scrollTo(0,0)
  }

  render() {
    const links = footerLinks();
    const year = thisYear();

    return (
      <footer className="w-full container">
        <button
          type="button"
          className="scroll-top-button"
          onClick={() => this.backToTop()}>
          Back to top &uarr;
        </button>
        <div className="md:flex justify-between h-full p-8 text-center md:text-left">
          <p className="self-center mb-4 md:m-0">&copy; {" "}{year}{" "}
            <CustomLink
              external={true}
              css="self-center"
              to="https://mikelaroy.ca">
              Michael LaRoy
            </CustomLink></p>
          <ul className="flex justify-center flex-row list-reset align-center text-center md:text-left">
          {links.map(link => {
              return (
                <li key={link.name} className="flex px-4">
                  <CustomLink
                    css="self-center text-center"
                    to={link.url}
                    external={true}
                    icon={link.icon} />
                </li>
              )
            })}
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;

const thisYear = () => {
  return new Date().getFullYear();
}

const footerLinks = () => {
  return [
    {
      name: 'Github',
      url: 'https://github.com/mlaroy',
      icon: 'github'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/mikelaroy',
      icon: 'linkedin'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/laroymike',
      icon: 'twitter'
    }
  ]
}