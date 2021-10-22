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

  validate() {
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

  containsChar(type) {
    const passwordArr = this.state.password.split('');
    let characters;
    if (type === 'number') {
      characters = '0123456789';
    }
    if (type === 'capital') {
      characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (type === 'special') {
      characters = '!@#$%^&*()';
    }
    const filtered = passwordArr.filter(char => characters.includes(char));
    return filtered.length > 0;
  }

  hasRequiredLength() {
    return this.state.password.length >= 8;
  }

  render() {
    let icon = 'fas fa-times red';
    let message = '';
    if (this.state.password.length === 0) {
      message = 'A password is required.';
    }
    if (this.hasRequiredLength) {
      if (!this.containsChar('number')) {
        message = 'Password must contain a number.';
      } else if (!this.containsChar('capital')) {
        message = 'Password must contain a capital letter.';
      } else if (!this.containsChar('special')) {
        message = 'Password must contain a special character (!, @, #, $, %, ^, &, *, (, or )) ';
      } else {
        icon = 'fas fa-check green';
      }
    } else {
      message = 'Password too short';
    }
    return (
      <>
        <div><label htmlFor="password">Password</label></div>
          <input name="password"
            type="password"
            id="password"
            value={this.state.password}
            onChange={e => this.handleChange(e)}/>
          <span> <i className={icon}></i></span>
          <div className="red">{message}</div>
      </>
    );
  }
}

export default ValidatedPassword;
