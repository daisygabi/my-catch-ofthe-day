import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';

describe('verify rendered UI items', () => {
    it('renders without crashing', () => {
        shallow(<App/>);
    });
});