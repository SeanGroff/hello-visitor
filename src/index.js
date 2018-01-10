import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './components/Hello';

/**
 * The render() method bootstraps the <Hello /> component to the HTML element with an ID of 'root'
 */
ReactDOM.render(<Hello />, document.getElementById('root'));
