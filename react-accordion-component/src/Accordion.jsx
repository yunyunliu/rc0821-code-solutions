import React from 'react';

import Item from './Item';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current: null };
    this.toggleHidden = this.toggleHidden.bind(this);
  }

  toggleHidden({ target }) {
    const id = target.id;
    if (id == this.state.current) {
      this.setState({ current: null });
    } else {
      this.setState({ current: id });
    }
  }

  render() {
    return (
      <ul className="accordion">
        {
          this.props.data.map(el => {
            return (
              <Item key={el.id}
              data={el}
              toggle={this.toggleHidden}
              current={this.state.current}/>
            );
          })
        }
      </ul>
    );
  }
}

export default Accordion;
