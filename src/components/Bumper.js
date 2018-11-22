import React, { Component } from 'react';

class Bumper extends Component {
  render() {
    const { children } = this.props;
    return (
      <section className="text-white bg-gradient text-center py-16">
        <div className="container">
          {children}
        </div>
      </section>
    );
  }
}

export default Bumper;