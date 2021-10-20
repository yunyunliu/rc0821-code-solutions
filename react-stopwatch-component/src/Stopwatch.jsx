import React from 'react';

class Stopwatch extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <button><i className="fas fa-play"></i></button>;
  }
}

export default Stopwatch;
