import React from 'react';
import ReactDOM from 'react-dom';

class NewsLetterForm extends React.Component {
  constructor() {
    super();
    this.state = { email: '' };
  }

  handleChange({ target }) {
    this.setState({ email: target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('state:', this.state);
    // this.setState({ email: '' });
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <label>enter email:</label>
        <div>
          <input id="email"
            value={this.state.email}
            onChange={e => this.handleChange(e)} />
        </div>
        <button>Enter</button>
      </form>
    );
  }
}

ReactDOM.render(
  <NewsLetterForm />,
  document.getElementById('root')
);
