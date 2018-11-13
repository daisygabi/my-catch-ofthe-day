import React from "react";
import PropTypes from "prop-types";

export default class EditFormFish extends React.Component {
    static propTypes = {
        fish: PropTypes.shape({
           name: PropTypes.string,
           price: PropTypes.number,
           status: PropTypes.string,
            desc: PropTypes.string,
            image: PropTypes.string
        }),
        addToOrderFromApp: PropTypes.func
    };

    render() {
        return (
            <div className="fish-edit">
                <input
                    type="text"
                    name="name"
                    value={this.props.fish.name}/>
                <input
                    type="text"
                    name="price"
                    value={this.props.fish.price}/>
                <select
                    type="text"
                    name="status"
                    value={this.props.fish.status}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea
                    name="desc"
                    value={this.props.fish.desc}/>
                <input
                    type="text"
                    name="image"
                    value={this.props.fish.image}/>
                <button onClick={() => this.props.deleteFish(this.props.index)}>
                    Remove Fish
                </button>
            </div>
        );
    }
}