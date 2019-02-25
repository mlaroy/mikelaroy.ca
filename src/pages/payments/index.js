import React, { Component } from 'react';
import Layout from '../../components/layout'
import Section from '../../components/Section'

class Payments extends Component {
  render() {
    return (
      <Layout>
        <Section css="container">
          <div className="p-8 mx-auto text-center">
            <h2 className="mb-8 text-3xl">Thanks for sending your payment</h2>
            <p>To pay via credit card, click below:</p>

            <button class="button">Pay with credit card</button>
          </div>
        </Section>
      </Layout>
    );
  }
}

export default Payments;