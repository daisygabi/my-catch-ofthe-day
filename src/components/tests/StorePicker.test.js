import React from 'react';
import {mount, shallow} from 'enzyme';
import StorePicker from "../StorePicker";

describe('verify rendered UI items', () => {
    it('find store name button', () => {
        const wrapper = shallow(<StorePicker/>);
        const storeButton = <button id="storeButton" className="goto-store-button" type="submit">Go to store</button>;
        expect(wrapper.contains(storeButton)).toEqual(true);
    });
    it('find store name input', () => {
        const wrapper = shallow(<StorePicker/>);
        const storeNameInput = <input id="storeName" type="text" required placeholder="Store Name"/>;
        expect(wrapper.contains(storeNameInput)).toEqual(true);
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