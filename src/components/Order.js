import React from "react";
import PropTypes from "prop-types";
import {formatPrice} from "../helper";

export default class Order extends React.Component {
    static propTypes = {
        fishes: PropTypes.object,
        order: PropTypes.object
    };

    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            console.log(prevTotal + " / fish name: " + fish.name + ", count: " + count);
            const isAvailable = fish && fish.status === 'available';
            if (isAvailable) {
                return prevTotal + (count * fish.price);
            }
            return prevTotal;
        }, 0);


        return (
            <div>
                <h2>Order</h2>
                <ul>
                    {orderIds.map(this.renderOrder)}
                </ul>
                <div>
                    Total: {formatPrice(total)}
                </div>
            </div>
        );
    }

    renderOrder = (key) => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const isAvailable = fish.status === 'available';
        if (!isAvailable) {
            return <li key={key}>Sorry {fish ? fish.name : 'fish'} is not available</li>;
        }
        return <li key={key}>{count} lbs {fish.name} {formatPrice(count * fish.price)}</li>;
    };
}