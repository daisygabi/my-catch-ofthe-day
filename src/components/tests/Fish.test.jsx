import React from 'react';
import {mount} from 'enzyme';
import Fish from "../Fish";

describe('verify rendered UI items', () => {
    var order;
    var component;
    var key;
    var fish;

    beforeEach(() => {
        order = {
            key: "fish1",
            count: 1
        };
        key = 1;
        fish = {
            image: "../images/hali.jpg",
            name: "Pacific Halibut",
            price: 1724,
            desc:
                "Everyones favorite white fish. We will cut it to the size you need and ship it.",
            status: "available"
        };
        component = mount(<Fish key={key}
                                index={key}
                                details={fish}/>);
    });

    it('renders without crashing', () => {
        expect(component).toBeTruthy();
    });
    it('verifies props data is what reached the component view', () => {
        expect(component).toBeTruthy();
        expect(component.find('#showFish').length).toEqual(1);

        expect(component.props().details.name).toEqual(fish.name);
        expect(component.props().details.image).toEqual(fish.image);
        expect(component.props().details.price).toEqual(fish.price);
        expect(component.props().details.desc).toEqual(fish.desc);
    });
});