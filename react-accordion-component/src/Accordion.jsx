import React from 'react';

const data = [
  {
    name: 'Hypertext Markup Language',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a imperdiet odio. Sed euismod, ante euismod aliquam pretium, justo tellus sollicitudin justo, consequat ultricies velit tortor ac ipsum. Nunc elementum risus nec tincidunt maximus. Donec sed risus quis ipsum congue elementum. Fusce a rhoncus nisi. Etiam ultrices semper sem quis tincidunt.'
  },
  {
    name: 'Cascading Style Sheets',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a imperdiet odio. Sed euismod, ante euismod aliquam pretium, justo tellus sollicitudin justo, consequat ultricies velit tortor ac ipsum. Nunc elementum risus nec tincidunt maximus. Donec sed risus quis ipsum congue elementum. Fusce a rhoncus nisi. Etiam ultrices semper sem quis tincidunt.'
  },
  {
    name: 'JavaScript',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a imperdiet odio. Sed euismod, ante euismod aliquam pretium, justo tellus sollicitudin justo, consequat ultricies velit tortor ac ipsum. Nunc elementum risus nec tincidunt maximus. Donec sed risus quis ipsum congue elementum. Fusce a rhoncus nisi. Etiam ultrices semper sem quis tincidunt.'
  }
];

class Accordion extends React.Component {
  constructor() {
    super();
    this.state = {
      technologies: data
    };
  }

  render() {

    return (
      <div><ul className="accordion">
        {
          this.state.technologies.map(el => {
            return (
              <li key={el.name} className="item">
                <h2 className="title">{el.name}</h2>
                <p className={`description ${'hidden'}`}>{el.description}</p>
              </li>
            );
          })
        }

        </ul></div>
    );
  }

}

export default Accordion;
