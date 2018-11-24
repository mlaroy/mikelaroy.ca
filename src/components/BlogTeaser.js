import React, { Component } from 'react'
import CustomLink from './CustomLink'

class BlogTeaser extends Component {
  render() {
    const { post, linkColor, small = false } = this.props;
    const pSize = small ? 'text-med mb-4' : 'text-xl mb-4';
    const { slug, title, date } = post.node.frontmatter;
    return (
      <article className="pb-16 blog-article w-full lg:w-4/5">
        <CustomLink to={`/blog${slug}`} css={linkColor}>
          <h2 className="text-3xl mb-2">{title}</h2>
        </CustomLink>
        <time className="mb-4 block">{date}</time>
        <p className={pSize}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laboriosam qui quaerat.
        </p>
        <CustomLink to="url" css={linkColor}>Read post &rarr;</CustomLink>
      </article>
    );
  }
}

export default BlogTeaser;