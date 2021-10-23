import React from 'react';

const data = [
  {
    isHidden: true,
    name: 'Hypertext Markup Language',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a imperdiet odio. Sed euismod, ante euismod aliquam pretium, justo tellus sollicitudin justo, consequat ultricies velit tortor ac ipsum. Nunc elementum risus nec tincidunt maximus. Donec sed risus quis ipsum congue elementum. Fusce a rhoncus nisi. Etiam ultrices semper sem quis tincidunt.',
    id: 1
  },
  {
    isHidden: true,
    name: 'Cascading Style Sheets',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a imperdiet odio. Sed euismod, ante euismod aliquam pretium, justo tellus sollicitudin justo, consequat ultricies velit tortor ac ipsum. Nunc elementum risus nec tincidunt maximus. Donec sed risus quis ipsum congue elementum. Fusce a rhoncus nisi. Etiam ultrices semper sem quis tincidunt.',
    id: 2
  },
  {
    isHidden: true,
    name: 'JavaScript',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a imperdiet odio. Sed euismod, ante euismod aliquam pretium, justo tellus sollicitudin justo, consequat ultricies velit tortor ac ipsum. Nunc elementum risus nec tincidunt maximus. Donec sed risus quis ipsum congue elementum. Fusce a rhoncus nisi. Etiam ultrices semper sem quis tincidunt.',
    id: 3
  }
];

class Accordion extends React.Component {
  constructor() {
    super();
    this.state = {
      technologies: data
    };
  }

  getItem(id) {
    const arr = this.state.technologies;
    const item = arr.find(el => el.id == id);
    return item;
  }

  replaceItem(id, item) {
    const arr = this.state.technologies;
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
    console.log(clickedItem);
    clickedItem.isHidden = !clickedItem.isHidden;
    const updatedData = this.replaceItem(id, clickedItem);

    // console.log('updatedTechnologies:', updatedTechnologies)
    this.setState = ({ technologies: updatedData });
  }

  render() {
    console.log('item 3:', this.state.technologies[2]);
    return (
      <ul className="accordion">
        {
          this.state.technologies.map(el => {
            let description;
            if (el.hidden) {
              description = null;
            } else {
              description = <p className="description">{el.description}</p>;
            }
            return (
              <li key={el.id}
              className="item">
                <button className="title"
                  id={el.id}
                  onClick={e => this.toggleHidden(e)}>
                    {el.name}
                </button>
                {description}
              </li>
            );
          })
        }
      </ul>
    );
  }

}

export default Accordion;
