import React from 'react';
import {shallow} from 'enzyme';
import StorePicker from "../StorePicker";

describe('verify rendered UI items', () => {
    it('find store name button', () => {
        const wrapper = shallow(<StorePicker/>);
        const storeButton = <button className="goto-store-button" type="submit">Go to store</button>;
        expect(wrapper.contains(storeButton)).toEqual(true);
    });
    it('find store name input', () => {
        const wrapper = shallow(<StorePicker/>);
        const storeNameInput = <input id="storeName" type="text" required placeholder="Store Name"/>;
        expect(wrapper.contains(storeNameInput)).toEqual(true);
    });
});

describe('do actions in the form', () => {
    it('submit store name button and call next function to get the name and show in Url path', () => {
        const event = Object.assign(jest.fn(), {
            preventDefault: () => {
            }
        });
        const button = shallow((<button className="goto-store-button" type="submit">Go to store</button>));
        button.simulate('click', event);
        const pageMounted = shallow(<StorePicker/>);
        pageMounted.instance().goToStore(event);
    });
});