import React, { useContext } from 'react'
import { ThemeContext } from '../context/themeContext';
import CustomLink from '../components/CustomLink'
import Signature from './signature'

const Header = ({ siteTitle }) => {

  const { toggleBodyClass, isDark } = useContext( ThemeContext );
  const buttonText = isDark ? 'Set light theme' : 'Set dark theme';

  return (
    <header className="w-full bg-1">
      <div className="container">
        <div className="md:flex justify-between h-full px-8">
            <h1>
              <CustomLink to="/" classes="self-center font-serif no-underline text-xl relative">
                <Signature classes="site-logo mt-4 w-32 md:w-48 signature" width="180" title={siteTitle} />
              </CustomLink>
            </h1>
            <nav className="md:flex align-center header-nav">
              <CustomLink to="/#about" classes="self-center" external="false">About</CustomLink>
              <CustomLink to="/blog" classes="self-center ml-4" external="false">Blog</CustomLink>
              <CustomLink to="/#contact" classes="self-center ml-4" external="false">Contact</CustomLink>
              <button
                className="self-center ml-4 px-2 py-1 text-sm rounded"
                onClick={() => toggleBodyClass(!isDark)}
                title={buttonText}>
                  {isDark ? '☀️ ' : '🌙'}
                  <span className="sr-only">{buttonText}</span>
              </button>
            </nav>
          </div>
        </div>
    </header>
  );
  };

export default Header
