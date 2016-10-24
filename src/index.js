import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import './styles/core.scss';

ReactDOM.render(
    <Root />,
	document.getElementById('app')
);