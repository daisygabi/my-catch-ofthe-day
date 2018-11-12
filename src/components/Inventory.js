import React from "react";
import PropTypes from "prop-types";

export default class Inventory extends React.Component {
    static propTypes = {
        loadSampleFishes: PropTypes.func
    };

    render() {
        return (
            <div>
                <p>Show Inventory here</p>
                <button id="loadFishesButton"
                        onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
            </div>
        );
    }
}