import React, { Component } from 'react'

class Section extends Component {
  render() {
    const { classes, id } = this.props;
    console.log(this.props);
    return (
      <section className={classes} id={id}>
        {this.props.children}
      </section>
    );
  }
}

export default Section;