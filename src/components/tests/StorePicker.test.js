import React from 'react';
import {shallow} from 'enzyme';
import StorePicker from "../StorePicker";

describe('verify rendered UI items', () => {
    it('find store name button', () => {
        const wrapper = shallow(<StorePicker/>);
        const storeButton = <button className="goto-store-button" type="submit">Go to store</button>;
        expect(wrapper.contains(storeButton)).toEqual(true);
    });

    it('find store name input name', () => {
        const wrapper = shallow(<StorePicker/>);
        const inputName = <input type="text" required placeholder="Store Name" />;
        expect(wrapper.contains(inputName)).toEqual(true);
    });
});