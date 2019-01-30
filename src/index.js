import React from 'react';
import ReactDOM from 'react-dom';
import App, { color, number } from './Components/App';
import './index.css';

console.log(color, number)
//what to render/ where
ReactDOM.render(
    <App />,
document.getElementById('root'));

