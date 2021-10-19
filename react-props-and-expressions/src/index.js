import React from 'react';
import ReactDOM from 'react-dom';

// eslint-disable-next-line react/prop-types
const CustomButton = ({ text }) => <button>{text}</button>;

const element = (
  <div>
    <CustomButton text="I" />
    <CustomButton text="Know" />
    <CustomButton text="React!" />
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
