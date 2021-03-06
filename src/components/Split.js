import React, { Component } from 'react';

class Split extends Component {
  render() {
    const { left, right } = this.props;
    return (
      <div className="flex justify-center flex-col md:flex-row">
        <div className="w-full md:1/2 lg:w-3/5 text-white px-8 py-16 bg-cascadia-blue">
          <div className="container">
            <div className="md:float-right md:w-4/5">
              {left}
            </div>
          </div>
        </div>
        <div className="w-full md:1/2 lg:w-2/5 px-8 py-16 text-white bg-jp-indigo">
          <div className="container">
            <div className="md:float-left md:w-4/5">
              {right}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Split;
