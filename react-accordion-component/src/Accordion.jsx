import React from 'react';

import Item from './Item';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.data };
    this.toggleHidden = this.toggleHidden.bind(this);
  }

  getItem(id) {
    const arr = this.state.data;
    const item = arr.find(el => el.id == id);
    return item;

  }

  replaceItem(id, item) {
    const arr = this.state.data;
    const updated = arr.map(el => {
      if (id == el.id) {
        return item;
      } else {
        return el;
      }
    });
    return updated;
  }

  toggleHidden({ target }) {
    const id = target.id;
    const clickedItem = this.getItem(id);
    // console.log('id:', id);
    // console.log('clickedItem:', clickedItem)

    clickedItem.isHidden = !clickedItem.isHidden;
    const updatedData = this.replaceItem(id, clickedItem);

    // console.log('updatedTechnologies:', updatedTechnologies)
    this.setState({ data: updatedData });
  }

  render() {
    // console.log('html:', this.state.data[0]);
    return (
      <ul className="accordion">
        {
          this.state.data.map(el => {
            return (
              <Item key={el.id} data={el} toggle={this.toggleHidden}/>
            );
          })
        }
      </ul>
    );
  }
}

export default Accordion;
