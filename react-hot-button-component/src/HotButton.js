import React from 'react';

import './styles.css';

class HotButton extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  handleClick() {
    if (this.state.count === 18) {
      this.setState({ count: 0 });
    } else {
      this.setState(prevState => ({ count: this.state.count + 1 }));
    }
  }

  render() {
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

    return (
      <button className={`button ${className}`}onClick={() => this.handleClick()}>
        Hot Button
      </button>);
  }
}

export default HotButton;
