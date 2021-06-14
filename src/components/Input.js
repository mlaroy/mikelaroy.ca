import React, { Component } from 'react';
import { capitalize } from '../utilities/helpers';

class Input extends Component {
  render() {
    const { value, name, onChange, required = false, label = false, type = 'text', hint = false } = this.props;
    const inputClass = 'shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline input-bg';
    const buttonClass = 'button';
    const labelOutput = hint ? getHintLink(hint, label) : label;
    return (
      <div className="mb-4">
        {label && <label htmlFor={name} className="block text-base md:text-lg">{labelOutput}</label>}
        <input
          className={type !== 'submit' ? inputClass : buttonClass }
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          required={required ? 'required' : false} />
      </div>
    );
  }
}

export default Input;

const getHintLink = (hint, label) => <a href={hint} target="_blank" className="transition">{label}</a>;
