import React from 'react';
import ReactDOM from 'react-dom';

const CustomButton = () => <button>{'Click me!'}</button>;

ReactDOM.render(
  CustomButton(),
  document.getElementById('root')
);
