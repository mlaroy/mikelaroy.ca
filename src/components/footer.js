import React, { Component } from 'react'
import CustomLink from '../components/CustomLink'

class Footer extends Component {
  render() {
    const links = footerLinks();
    const year = thisYear();

    return (
      <footer className="flex flex-col justify-center">
        <div className="container">
          <p className="self-center">&copy; Michael LaRoy {year}</p>
          <ul className="flex flex-row list-reset align-center">
          {links.map(link => {
              return (
                <li key={link.name} className="flex">
                  <CustomLink css="self-center" to={link.url}>{link.name}</CustomLink>
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
      url: 'https://github.com/mlaroy'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/mikelaroy'
    }
  ]
}