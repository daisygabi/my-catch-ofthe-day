import React from 'react';
import {mount, shallow} from 'enzyme';
import StorePicker from "../StorePicker";

describe('verify rendered UI items', () => {
    it('find store name button', () => {
        const wrapper = shallow(<StorePicker/>);
        expect(wrapper.find('#storeButton').length).toEqual(1);
    });
    it('find store name input', () => {
        const wrapper = shallow(<StorePicker/>);
        expect(wrapper.find('#storeName').length).toEqual(1);
    });
});

describe('verify actions in the form', () => {
    it('submit store name button and call goToStore function', () => {
        // Get instance of StorePicker component
        const pageMounted = mount(<StorePicker/>);

        // Set a name
        const input = pageMounted.find('#storeName');
        input.getDOMNode().value = 'gabi is awesome';
        input.simulate('change');
        expect(input.getDOMNode().value).toEqual('gabi is awesome');

        // Click on submit button
        const fakeEvent = Object.assign(jest.fn(), {
            preventDefault() {}
        });
        pageMounted.find('#storeButton').simulate('click', fakeEvent);
    });
});