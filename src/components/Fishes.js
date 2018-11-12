import React from "react";
import Fish from "./Fish";
import PropTypes from "prop-types";

export default class Fishes extends React.Component {
    static propTypes = {
        addToOrderFromApp: PropTypes.func
    };
    render() {
        return (
            <div>
                <ul>
                    {Object.keys(this.props.fishes).map(key => (
                        <Fish
                            key={key}
                            index={key}
                            details={this.props.fishes[key]}
                            addToOrder={this.addToOrder}
                        />
                    ))}
                </ul>
            </div>
        );
    }

    addToOrder = key => {
        this.props.addToOrderFromApp(key);
    };
}