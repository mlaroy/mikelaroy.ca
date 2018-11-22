import React, { Component } from 'react'

class Section extends Component {
  render() {
    const { css } = this.props;
    return (
      <section className={css}>
        {this.props.children}
      </section>
    );
  }
}

export default Section;