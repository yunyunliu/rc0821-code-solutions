import React from 'react';

class Stopwatch extends React.Component {
  constructor() {
    super();
    this.state = { seconds: 0 };
  }

  render() {
    return (
      <div className="container">
        <div className="watch">
          <span className="number">{this.state.seconds}</span>
        </div>
        <button className="button"><i className="fas fa-play"></i></button>
      </div>
    );
  }
}

export default Stopwatch;
