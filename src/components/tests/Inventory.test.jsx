import React from 'react';
import {shallow} from 'enzyme';
import Inventory from '../Inventory';

describe('verify rendered UI items', () => {
    it('renders without crashing', () => {
        shallow(<Inventory/>);
    });
});