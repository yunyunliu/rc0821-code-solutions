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
    let color;
    let direction;
    if (this.state.isOn) {
      color = 'button green-bg';
      direction = 'slider slide-right';
    } else {
      color = 'button';
      direction = 'slider';
    }
    return (
      <button className={color} onClick={() => this.toggle()}>
        <div className={direction}></div>
      </button>
    );
  }
}

export default ToggleSwitch;
