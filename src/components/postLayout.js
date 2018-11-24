import React, { Component } from 'react';
import Layout from './layout';
import Section from './Section';
class postLayout extends Component {
  render() {
    return (
      <Layout>
        <Section css="container p-8">
          <h1>Post Title</h1>
          <time>date</time>
        </Section>

      </Layout>
    );
  }
}

export default postLayout;