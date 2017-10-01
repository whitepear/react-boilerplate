/*
	This is the app entry point, the webpack bundler uses this file
	as the starting point for bundling. Mounting of the React app to
	the DOM occurs here.
*/

import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles/client.scss';
import MainContainer from './containers/MainContainer.js';

ReactDOM.render(
	<MainContainer />,
	document.getElementById('app')
);
