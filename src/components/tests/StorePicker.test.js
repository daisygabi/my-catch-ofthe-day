import React from 'react';
import {shallow} from 'enzyme';
import StorePicker from "../StorePicker";
import App from "../App";

describe('verify rendered UI items', () => {
    it('find store name button', () => {
        const wrapper = shallow(<StorePicker/>);
        const storeButton = <button className="goto-store-button" type="submit">Go to store</button>;
        expect(wrapper.contains(storeButton)).toEqual(true);
    });
});

describe('do actions in the form', () => {
    it('submit store name button', () => {
        const wrapper = shallow(<button className="goto-store-button" type="submit">Go to store</button>);
        wrapper.find('button').simulate('click');
        expect(wrapper.find("</App>")).toBe(true);
    });
});