import React from 'react';
import { render } from '@testing-library/react';
import MainApp from './App.js';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<MainApp />, div);
	ReactDOM.unmountComponentAtNode(div);
});


