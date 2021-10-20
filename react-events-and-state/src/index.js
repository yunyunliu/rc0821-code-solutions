import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor() {
    super();
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    return (
     <button onClick={() => this.handleClick()}>
       {this.state.isClicked ? 'Thanks!' : 'Click me!'}
     </button>
    );
  }
}

ReactDOM.render(
  <CustomButton />,
  document.getElementById('root')
);
