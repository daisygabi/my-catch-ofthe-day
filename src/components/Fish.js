import React from "react";
import PropTypes from "prop-types";

export default class Fish extends React.Component {
    static propTypes = {
        details: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            desc: PropTypes.string,
            status: PropTypes.string,
            price: PropTypes.number
        }),
        handleClick: PropTypes.func
    };
    addToOrderClick = (index) => {
        this.props.handleClick(index);
    };

    render() {
        const {image, name, price, desc, status} = this.props.details;
        const isAvailable = status === "available";
        return (
            <li id="showFish" className="menu-fish">
                <img src={image} alt={name}/>
                <h3 className="fish-name">
                    {name}
                    <span className="price">{price}</span>
                </h3>
                <p>{desc}</p>
                <button
                    disabled={!isAvailable}
                    onClick={() => this.addToOrderClick(this.props.index)}>
                    {isAvailable ? "Add To Order" : "Sold Out!"}
                </button>
            </li>
        );
    };
}