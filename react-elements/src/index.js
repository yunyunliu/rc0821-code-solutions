import React from 'react';
import ReactDOM from 'react-dom';

const hello = React.createElement('h1', null, ['Hello, React!']);
// eslint-disable-next-line no-console
console.log(hello);

ReactDOM.render(hello, document.getElementById('root'));
