import React from 'react'
import CustomLink from '../components/CustomLink'
import Signature from './signature'

const Header = ({ siteTitle }) => (
  <header className="w-full container">
    <div className="flex justify-between h-full px-8">
      <CustomLink to="/" css="self-center font-serif no-underline text-xl relative">
        <Signature css="site-logo mt-4 w-32 md:w-48" width="180" />
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
