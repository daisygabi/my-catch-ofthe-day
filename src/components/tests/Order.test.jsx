import React from 'react';
import {shallow} from 'enzyme';
import Order from '../Order';

describe('verify rendered UI items', () => {
    it('renders without crashing', () => {
        shallow(<Order/>);
    });
});