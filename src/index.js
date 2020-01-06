import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app.jsx'
import './assets/sass/style.scss'
ReactDom.render(
	<App />,
    document.querySelector('#root')  
	)