import React, { Component } from 'react'
import cascadiaLogo from '../images/cascadia-logo-5-white.svg';
import mountains from '../images/mountains.jpg';

class CascadiaCallout extends Component {
  render() {
    const { width } = this.props;
    return (
        <div className={`px-8 py-12 sm:py-16 md:p-16 bg-jp-indigo text-white md:w-${width ? width : '1/2'} sm:rounded flex flex-col justify-center relative shadow-lg overflow-hidden`}>
            <div className="z-10">
            <img src={cascadiaLogo} width="150px" alt="Michael LaRoy" className="block mb-4"/>
            <h2 className="text-2xl md:text-3xl leading-tight mb-4">Looking for a web development partner?</h2>
            <p className="text-lg">
                Please head over to <a href="https://cascadia.digital/">Cascadia Digital</a>{' '}
                to get in touch, and we can talk business.
            </p>
            </div>
            <img
                src={mountains}
                alt=""
                className="mx-auto block absolute h-full w-full pin-t pin-x z-0 opacity-25"
                style={{
                    objectPosition: 'center',
                    objectFit: 'cover'
                }}
            />
        </div>
    );
  }
}

export default CascadiaCallout;
