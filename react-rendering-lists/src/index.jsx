import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

const PokeList = () => {
  const list = pokedex.map(poke => <li key={poke.number}>{poke.name}</li>);
  return <ul>{list}</ul>;
};

ReactDOM.render(
  <PokeList />,
  document.getElementById('root')
);
