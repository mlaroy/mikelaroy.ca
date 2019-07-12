import React, { Component } from 'react';
// import { DiscussionEmbed } from 'disqus-react';
import { graphql, Link } from 'gatsby';
import CustomLink from './CustomLink';
import styled from 'styled-components';
import Layout from './layout';
import Section from './Section';
import Signature from './signature';
import Helmet from 'react-helmet';
import Share from './share';

const Narrow = styled.div`
  max-width: 960px;
  margin: 0 auto;
  ${tw`px-8 py-8 h-full flex flex-col justify-center`};
`
class postLayout extends Component {
  render() {
    const { markdownRemark, site } = this.props.data;
    const { previous, next } = this.props.pageContext;
    // console.log(previous);
    const { html, timeToRead, excerpt } = markdownRemark;
    const { date, title, slug } = markdownRemark.frontmatter
    // const disqusShortname = 'mikelaroy';
    // const disqusConfig = {
    //   identifier: slug,
    //   title: title,
    // };

    return (
      <Layout>
        <Helmet
          title={`${title} | ${site.siteMetadata.title}`}
          meta={[
            {
              name: 'description',
              content: excerpt
            },
            {
              property: `og:title`,
              content: `${title} | ${site.siteMetadata.title}`
            },
            {
              property: `og:description`,
              content: `${excerpt}`,
            }
            // {
            //   name: `twitter:image`,
            //   content: `${site.siteMetadata.url}${slug || ''}twitter-card.jpg`
            // }
          ]}
        >
        </Helmet>
        <Section css="container">
          <Narrow>
            <h1 className="text-3xl md:text-5xl section-heading">{title}</h1>
            <p className="pb-4 text-sm">
              <time className="inline-block pr-4">{date}</time> | <span className="inline-block pl-4">Read time: {timeToRead} min</span>
            </p>
            <hr className="border border-b-1 border-grey-light block w-full mb-16"/>
            <div className="article-body" dangerouslySetInnerHTML={{
              __html: html
            }}></div>
            <div className="my-8">
              <Signature />
            </div>
            <div className="flex justify-between my-16">
              {previous && (
                <CustomLink to={`/blog${previous.frontmatter.slug}`} css="text-blue hover:text-orange" rel="prev">
                  ← {previous.frontmatter.title}
                </CustomLink>
              )}
              {next && (
                <CustomLink to={`/blog${next.frontmatter.slug}`} css="text-blue hover:text-orange" rel="next">
                  {next.frontmatter.title} →
                </CustomLink>
              )}
            </div>
            <Share
              url={this.props.location.href}
              title={title}
              description={excerpt}
            />
            {/* <div className="my-8">
              <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
            </div> */}
          </Narrow>
        </Section>
      </Layout>
    );
  }
}

export const query = graphql`
  query PostQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        keywords,
        url
      }
    }
    markdownRemark(frontmatter: {
      slug: {
        eq: $slug
      }
    }) {
      html
      timeToRead,
      excerpt,
      frontmatter {
        title
        slug
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

export default postLayout;