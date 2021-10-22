import React from 'react';

import Menu from './Menu';

class AppDrawer extends React.Component {
  constructor() {
    super();
    this.state = { menuHidden: true };
  }

  toggleMenu() {
    this.setState({ menuHidden: !this.state.menuHidden });
  }

  render() {
    return (
      <div>
        <button className="button" type="button" onClick={() => this.toggleMenu()}>
          <i className="fas fa-bars"></i>
        </button>
        { this.state.menuHidden
          ? null
          : <Menu toggle={() => this.toggleMenu()} />
        }
      </div>
    );
  }
}

export default AppDrawer;
