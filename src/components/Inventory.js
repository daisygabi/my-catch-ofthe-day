import React from "react";
import PropTypes from "prop-types";
import EditFormFish from "./EditFormFish";

export default class Inventory extends React.Component {
    static propTypes = {
        data: PropTypes.func,
        updateFish: PropTypes.func
    };

    render() {
        return (
            <div>
                <p>Show Inventory here</p>
                <button id="loadFishesButton"
                        onClick={this.props.data}>Load Sample Fishes</button>
                {Object.keys(this.props.fishes).map(key => (
                    <EditFormFish
                        key={key}
                        index={key}
                        fish={this.props.fishes[key]}
                        updateFishDetails={this.props.updateFish}/>
                ))}
            </div>
        );
    }
}