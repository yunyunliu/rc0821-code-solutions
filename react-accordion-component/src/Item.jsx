import React from 'react';

const Item = ({ data, toggle, current }) => {
  const { id, description, name } = data;
  return (
    <li>
      <button id={id}
         onClick={e => toggle(e)}
         type="button">{name}
      </button>
      <p className={`description ${id != current ? 'hidden' : ''}`}>
        {description}
      </p>
    </li>
  );
};

export default Item;
