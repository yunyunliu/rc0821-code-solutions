// <i className="fas fa-check"></i>
// <i className="fas fa-times"></i>
import React from 'react';

class ValidatedPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      password: ''
    };
  }

  getIconClass() {
    const length = this.state.password.length;
    if (length < 8) {
      return 'fas fa-times red';
    } else if (this.state.password.length < 8) {
      this.setState({ message: 'Password too short.' });
      this.setState({ isValid: false });
    } else {
      this.setState({ isValid: true });
    }
  }

  getMessage() {
    const length = this.state.password.length;
    if (length === 0) {
      return 'Password required.';
    }
    if (length < 8) {
      return 'Password too short.';
    }
    return '';
  }

  handleChange(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <>
        <div><label htmlFor="password">Password</label></div>
          <input name="password"
            type="password"
            id="password"
            value={this.state.password}
            onChange={e => this.handleChange(e)}/>
          <span> <i className={ this.state.password.length < 8 ? 'fas fa-times red' : 'fas fa-check green' }></i></span>
          <div className="red">{this.getMessage()}</div>
      </>
    );
  }
}

export default ValidatedPassword;
