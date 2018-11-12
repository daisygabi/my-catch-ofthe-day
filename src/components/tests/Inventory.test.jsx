import React from 'react';
import {shallow, mount} from 'enzyme';
import Inventory from '../Inventory';

describe('verify rendered UI items', () => {
    var fish;
    var component;

    beforeEach(() => {
        fish = {
            name: "Pacific Halibut",
            image: "/images/hali.jpg",
            desc:
                "Everyones favorite white fish. We will cut it to the size you need and ship it.",
            price: 1724,
            status: "available"
        };
    });
    beforeEach(() => {
        component = mount(<Inventory loadSamplesFishes={fish}/>);
    });

    it('renders without crashing', () => {
        shallow(<Inventory/>);
    });
    it('sends fishes data to props', () => {
        expect(component).toBeTruthy();
        expect(component.find('#loadFishesButton').length).toEqual(1);

        // Click on submit button
        const fakeEvent = Object.assign(jest.fn(), {
            preventDefault() {
            }
        });
        component.find('#loadFishesButton').simulate('click', fakeEvent);
        expect(component.props().loadSamplesFishes).toEqual(fish);
    });
});