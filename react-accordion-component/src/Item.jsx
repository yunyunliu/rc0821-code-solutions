import React from 'react';

const Item = ({ data, toggle }) => {
  const { id, isHidden, description, name } = data;
  return (
    <li>
      <button id={id}
         onClick={e => toggle(e)}
         type="button">{name}
      </button>
      <p className={`description ${isHidden ? 'hidden' : ''}`}>
        {description}
      </p>
    </li>
  );
};

export default Item;
