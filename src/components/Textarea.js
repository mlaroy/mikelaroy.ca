import React, { Component } from 'react';
import { capitalize } from '../utilities/helpers';

class Textarea extends Component {
  render() {
    const { value, name, onChange, rows, label = false } = this.props;
    const inputClass = 'shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline h-32 input-bg';
    return (
      <div className="mb-4">
        {label && <label htmlFor={name} className="block text-base md:text-lg">{label}</label>}
        <textarea
          className={inputClass}
          name={name}
          id={name}
          row={rows}
          value={value}
          onChange={onChange}
          >
          </textarea>
      </div>
    );
  }
}

export default Textarea;
