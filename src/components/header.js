import React from 'react'
import CustomLink from '../components/CustomLink'
import Signature from './signature'

const Header = ({ siteTitle }) => (
  <header className="w-full bg-white">
    <div className="flex justify-between h-full px-8 container">
      <CustomLink to="/" classes="self-center font-serif no-underline text-xl relative">
        <Signature classes="site-logo mt-4 w-32 md:w-48" width="180" />
      </CustomLink>
      <nav className="flex align-center header-nav">
        <CustomLink to="/#about" classes="self-center" external="false">About</CustomLink>
        <CustomLink to="/blog" classes="self-center ml-4" external="false">Blog</CustomLink>
        <CustomLink to="/#contact" classes="self-center ml-4" external="false">Contact</CustomLink>
      </nav>
    </div>
  </header>
)

export default Header
