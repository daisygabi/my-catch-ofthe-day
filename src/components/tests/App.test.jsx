import React from 'react';
import {mount, shallow} from 'enzyme';
import App from '../App';
import Fish from "../Fish";
import Order from "../Order";

describe('verify rendered UI items', () => {
    var orderComponent;
    var orderIds, key;
    var fish;
    var order;

    beforeEach(() => {
        orderIds = 'fish1';
        key = 'fish1';
        order = {
            fish1: 1,
            fish2: 2
        };
        fish = {
            image: "../images/hali.jpg",
            name: "Pacific Halibut",
            price: 1724,
            desc: "Everyone's favorite white fish. Only for some actually.",
            status: "available"
        };
        orderComponent = mount(<Order fishes={fish} order={order}/>);
    });
    it('renders without crashing', () => {
        shallow(<App/>);
    });
    it('it updates the order when a new fish is added or removed from the order', () => {
        const wrapper = shallow(<App />);
        wrapper.instance().addToOrderFromApp(key);

        console.log("fish: " + orderComponent.props().details.fishes);
        expect(orderComponent.props().details.fishes).toEqual(fish.name);
    });
});