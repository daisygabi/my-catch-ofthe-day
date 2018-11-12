import React from "react";
import Fish from "./Fish";

export default class Fishes extends React.Component {
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
}