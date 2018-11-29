import React, { Component } from 'react'
import CustomLink from './CustomLink'

class BlogTeaser extends Component {
  render() {
    const { post, linkColor, small = false } = this.props;
    const pSize = small ? 'text-sm md:text-lg mb-4' : 'text-base md:text-xl mb-4';
    const { slug, title, date } = post.node.frontmatter;
    const { excerpt } = post.node;
    return (
      <article className="blog-article w-full lg:w-4/5">
        <CustomLink to={`/blog${slug}`} css={`${linkColor} no-underline`}>
          <h2 className="text-2xl md:text-3xl mb-2">{title}</h2>
        </CustomLink>
        <time className="mb-4 block text-sm">{date}</time>
        <p className={pSize}>
          {excerpt}
        </p>
        <CustomLink to={`/blog${slug}`} css={`${linkColor} ${pSize}`}>Read post &rarr;</CustomLink>
      </article>
    );
  }
}

export default BlogTeaser;