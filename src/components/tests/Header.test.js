import React from 'react';
import {shallow, mount} from 'enzyme';
import Header from '../Header';

describe('verify rendered UI items', () => {
    it('renders without crashing', () => {
        shallow(<Header/>);
    });
    it('find logo', () => {
        const wrapper = shallow(<Header/>);
        expect(wrapper.find('#logo').length).toEqual(1);
    });
    it('find title', () => {
        const wrapper = shallow(<Header/>);
        expect(wrapper.find('#title').length).toEqual(1);
    });
});