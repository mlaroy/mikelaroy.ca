import React from 'react'
import CustomLink from '../components/CustomLink'
import logo from '../images/signature.svg'

const Header = ({ siteTitle }) => (
  <header className="w-full container">
    <div className="flex justify-between h-full px-8">
      <CustomLink to="/" css="self-center font-serif no-underline text-xl relative">
        {/* {siteTitle} */}
        <img className="site-logo mt-4 w-32 md:w-48" src={logo} width="180px" alt={siteTitle} />
      </CustomLink>
      <nav className="flex align-center header-nav">
        <CustomLink to="#about" css="self-center">About</CustomLink>
        <CustomLink to="/blog" css="self-center ml-4">Blog</CustomLink>
        <CustomLink to="#contact" css="self-center ml-4">Contact</CustomLink>
      </nav>
    </div>
  </header>
)

export default Header
