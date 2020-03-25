import React from 'react';
import {create} from 'react-test-renderer';
import ProfileStatus from './ProfileStatus.js';

describe('Test of ProfileStatus', () => {
	test('status from props should be in state', () => {
		const component = create(<ProfileStatus status='Keek :)'/>);
		const instance = component.getInstance();
		expect(instance.state.status).toBe('Keek :)');
	});

	test('status from props should be in state', () => {
		const component = create(<ProfileStatus status='Keek :)'/>);
		const root = component.root;
		let div = root.findByType('div')
		expect(div.length).toBe(1);
	})
});