import React, { Component } from 'react';

class Options extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="options">
        <button  onClick={this.props.reset}>R E S E T</button>
      </div>
    );
  }
}

export default Options;