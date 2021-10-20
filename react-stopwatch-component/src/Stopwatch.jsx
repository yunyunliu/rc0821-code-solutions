import React from 'react';

class Stopwatch extends React.Component {
  constructor() {
    super();
    this.state = {
      seconds: 0,
      isOn: false,
      timer: null
    };
  }

  tick() {
    this.setState({ seconds: this.state.seconds + 1 });
  }

  handleClick() {
    if (this.state.isOn) {
      // aka pause time - clear interval;
      clearInterval(this.state.timer);
    } else {
      //  aka start timer -set new interval; set state.timer
      const timer = setInterval(() => this.tick(), 1000);
      this.setState({ timer });
    }
    // always toggle state
    this.setState({ isOn: !this.state.isOn });
  }

  handleReset() {
    if (!this.state.isOn) {
      // clear timer; set state.timer to null; set state.seconds to 0
      clearInterval(this.state.timer);
      this.setState({
        timer: null,
        seconds: 0
      });
    }
    // when stopwatch is on, do nothing
  }

  render() {
    let icon;
    if (this.state.isOn) {
      icon = 'fas fa-pause';
    } else {
      icon = 'fas fa-play';
    }

    return (
      <div className="container">
        <button className="watch" onClick={() => this.handleReset()}>
          <span className="number">{this.state.seconds}</span>
        </button>
        <button className="button" onClick={() => this.handleClick()}>
          <i className={icon}></i>
        </button>
      </div>
    );
  }
}

export default Stopwatch;
