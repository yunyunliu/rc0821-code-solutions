import React from 'react';

class Stopwatch extends React.Component {
  constructor() {
    super();
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState({ seconds: this.state.seconds + 1 });
  }

  handleClick() {
    setInterval(() => this.tick(), 1000);
  }

  render() {
    return (
      <div className="container">
        <div className="watch">
          <span className="number">{this.state.seconds}</span>
        </div>
        <button className="button" onClick={() => this.handleClick()}><i className="fas fa-play"></i></button>
      </div>
    );
  }
}

export default Stopwatch;
