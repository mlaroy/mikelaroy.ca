import React, { Component } from 'react'

class Section extends Component {
  render() {
    const { css, id } = this.props;
    return (
      <section className={css} id={id}>
        {this.props.children}
      </section>
    );
  }
}

export default Section;