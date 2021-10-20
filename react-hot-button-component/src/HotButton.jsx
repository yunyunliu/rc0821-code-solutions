import React from 'react';

class HotButton extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  handleClick() {
    if (this.state.count === 17) {
      this.setState({ count: 0 });
    } else {
      this.setState({ count: this.state.count + 1 });
    }
  }

  getClass() {
    let className;
    if (this.state.count >= 3 &&
      this.state.count < 6) {
      className = 'bg-lavendar';
    } else if (this.state.count >= 6 &&
        this.state.count < 9) {
      className = 'bg-pink';
    } else if (this.state.count >= 9 &&
        this.state.count < 12) {
      className = 'bg-orange';
    } else if (this.state.count >= 12 &&
        this.state.count < 15) {
      className = 'bg-yellow';
    } else if (this.state.count >= 15) {
      className = 'bg-white';
    }
    return className;
  }

  render() {
    return (
      <button className={`button ${this.getClass()}`} onClick={() => this.handleClick()}>
        Hot Button
      </button>
    );
  }
}

export default HotButton;
