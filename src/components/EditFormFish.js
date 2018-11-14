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
        updateFishDetails: PropTypes.func
    };

    render() {
        return (
            <form>
                <input
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    value={this.props.fish.name}/>
                <input
                    type="text"
                    name="price"
                    onChange={this.handleChange}
                    value={this.props.fish.price}/>
                <select
                    name="status"
                    onChange={this.handleChange}
                    value={this.props.fish.status}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea
                    name="desc"
                    onChange={this.handleChange}
                    value={this.props.fish.desc}/>
                <input
                    type="text"
                    name="image"
                    onChange={this.handleChange}
                    value={this.props.fish.image}/>
                <button onClick={() => this.props.deleteFish(this.props.index)}>
                    Remove Fish
                </button>
            </form>
        );
    }

    handleChange = (event) => {
        // Take a copy of the current fish
        // Weird syntax. Takes the current fish and updates the modified inputs with their value
        const currentFish = {
          ...this.props.fish,
          [event.currentTarget.name]: event.currentTarget.value
        };
        // Update state of edited fish
        this.props.updateFishDetails(this.props.index, currentFish);
    }
}