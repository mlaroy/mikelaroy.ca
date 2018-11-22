import React, { Component } from 'react';

class Textarea extends Component {
  render() {
    const { value, name, rows, label = false } = this.props;
    const inputClass = 'shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline';
    return (
      <div className="mb-4">
        {label && <label htmlFor={name} className="block">{name}</label>}
        <textarea
          className={inputClass}
          name={name}
          id={name}
          row={rows}
          value={value}>
          </textarea>
      </div>
    );
  }
}

export default Textarea;
