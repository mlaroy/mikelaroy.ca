import React, { Component } from 'react'
import CustomLink from './CustomLink'

class BlogTeaser extends Component {
  render() {
    const { linkColor, small = false } = this.props;
    const pSize = small ? 'text-med mb-4' : 'text-xl mb-4';
    return (
      <article className="pb-16 blog-article w-full md:w-2/3">
        <CustomLink to="url" css={linkColor}>
          <h2 className="text-3xl mb-2">Blog post title goes here</h2>
        </CustomLink>
        <time className="mb-4 block">Nov 23, 2018</time>
        <p className={pSize}>
          Ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
        </p>
        <CustomLink to="url" css={linkColor}>Read post &rarr;</CustomLink>
      </article>
    );
  }
}

export default BlogTeaser;