import React from 'react';

const Menu = ({ toggle }) => {
  const links = ['About', 'Get Started', 'Sign In'];
  return (
    <div>
      <ul className="menu">
        {links.map(el => {
          return (
            <li key={el}>
              <button type="button"
                className="btn"
                onClick={() => toggle()}>{el}</button>
            </li>
          );
        })}
      </ul>
      <div className="overlay" onClick={() => toggle()}></div>
    </div>
  );
};

export default Menu;
