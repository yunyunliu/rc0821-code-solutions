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
    let classes;
    if (this.state.isOn) {
      classes = 'button green-bg';
    } else {
      classes = 'button';
    }
    return (
      <button className={ classes } onClick={() => this.toggle()}></button>
    );
  }
}

export default ToggleSwitch;
