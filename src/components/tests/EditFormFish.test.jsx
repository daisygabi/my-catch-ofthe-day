import React from 'react';
import {shallow} from 'enzyme';
import EditFormFish from "../EditFormFish";

describe('verify rendered UI items', () => {
    it('renders without crashing', () => {
        shallow(<EditFormFish/>);
    });
});