import React, { Component } from 'react';
import { capitalize } from '../utilities/helpers';

class Input extends Component {
  render() {
    const { value, name, required = false, label = false, type = 'text' } = this.props;
    const inputClass = 'shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline';
    const buttonClass = 'button';
    return (
      <div className="mb-4">
        {label && <label htmlFor={name} className="block text-base md:text-lg">{capitalize(name)}</label>}
        <input
          className={type !== 'submit' ? inputClass : buttonClass }
          type={type}
          name={name}
          id={name}
          value={value}
          required={required ? 'required' : false} />
      </div>
    );
  }
}

export default Input;
