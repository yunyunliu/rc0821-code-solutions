import React from 'react';
import ReactDOM from 'react-dom';

import Accordion from './Accordion';

const data = [
  {
    name: 'Hypertext Markup Language',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a imperdiet odio. Sed euismod, ante euismod aliquam pretium, justo tellus sollicitudin justo, consequat ultricies velit tortor ac ipsum. Nunc elementum risus nec tincidunt maximus. Donec sed risus quis ipsum congue elementum. Fusce a rhoncus nisi. Etiam ultrices semper sem quis tincidunt.',
    id: 1
  },
  {
    name: 'Cascading Style Sheets',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a imperdiet odio. Sed euismod, ante euismod aliquam pretium, justo tellus sollicitudin justo, consequat ultricies velit tortor ac ipsum. Nunc elementum risus nec tincidunt maximus. Donec sed risus quis ipsum congue elementum. Fusce a rhoncus nisi. Etiam ultrices semper sem quis tincidunt.',
    id: 2
  },
  {
    name: 'JavaScript',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a imperdiet odio. Sed euismod, ante euismod aliquam pretium, justo tellus sollicitudin justo, consequat ultricies velit tortor ac ipsum. Nunc elementum risus nec tincidunt maximus. Donec sed risus quis ipsum congue elementum. Fusce a rhoncus nisi. Etiam ultrices semper sem quis tincidunt.',
    id: 3
  }
];

ReactDOM.render(
  <Accordion data={data} />,
  document.getElementById('root')
);
