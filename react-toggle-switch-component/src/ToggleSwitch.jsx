import React, { Component } from 'react';

class ToggleSwitch extends Component {
  constructor() {
    super();
    this.state = { isOn: false };
  }

  toggle() {
    this.setState({ isOn: !this.state.isOn });
  }

  render() {
    return (
      <button className={`button ${this.state.isOn ? 'green-bg' : ''}`} onClick={() => this.toggle()}>
        <div className={`slider ${this.state.isOn ? 'slide-right' : ''}`}></div>
      </button>
    );
  }
}

export default ToggleSwitch;
