import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';

describe('verify rendered UI items', () => {
    var firstKey, secondKey;
    var defaultOrder, firstOrder, lastOrder;

    beforeEach(() => {
        firstKey = 'fish1';
        secondKey = 'fish2';
        defaultOrder = {
            fish1: 1
        };
        firstOrder = {
            fish1: 1,
            fish2: 1
        };
        lastOrder = {
            fish1: 1,
            fish2: 2
        };
    });
    it('renders without crashing', () => {
        shallow(<App/>);
    });
    it('it updates the order when a new fish is added to the order', () => {
        const wrapper = shallow(<App/>);
        // Add two new fish to order
        wrapper.instance().addToOrderFromApp(firstKey);
        wrapper.instance().addToOrderFromApp(secondKey);
        // Verify order state
        expect(wrapper.state().order).toEqual(firstOrder);

        // Add a fish to order that is already added
        wrapper.instance().addToOrderFromApp(secondKey);
        // Verify order state and it should contain both fishes
        expect(wrapper.state().order).toEqual(lastOrder);
    });
    it('it updates the order when a new fish is removed to the order', () => {
        const wrapper = shallow(<App/>);
        // Add two new fish to order
        wrapper.instance().addToOrderFromApp(firstKey);
        wrapper.instance().addToOrderFromApp(secondKey);
        // Verify order state
        expect(wrapper.state().order).toEqual(firstOrder);

        // Delete fish from order
        wrapper.instance().removeFishFromOrder(secondKey);
        // Verify order state
        expect(wrapper.state().order).toEqual(defaultOrder);
    });
});