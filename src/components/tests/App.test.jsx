import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';

const fish1Key = 'fish1';
const fish2Key = 'fish2';
const setupFishes = (appComponent) => {
    // Add two new fish to order
    appComponent.instance().addToOrderFromApp(fish1Key);
    appComponent.instance().addToOrderFromApp(fish2Key);
};

describe('App', () => {
    it('renders without crashing', () => {
        shallow(<App/>);
    });

    describe('addToOrderFromApp', () => {
        it('updates the order when a new fish is added to the order', () => {
            const wrapper = shallow(<App/>);
            setupFishes(wrapper);

            // Add a fish to order that is already added
            wrapper.instance().addToOrderFromApp(fish2Key);

            // Verify order state and it should contain both fishes
            expect(wrapper.state().order).toEqual({
                [fish1Key]: 1,
                [fish2Key]: 2
            });
        });
    });

    describe('removeFishFromOrder', () => {
        it('updates the order when a new fish is removed to the order', () => {
            const wrapper = shallow(<App/>);
            setupFishes(wrapper);
            // Delete fish from order
            wrapper.instance().removeFishFromOrder(fish2Key);
            // Verify order state
            expect(wrapper.state().order).toEqual({
                [fish1Key]: 1
            });
        });
    });
});