import React from "react";
import Fish from "./Fish";
import PropTypes from "prop-types";
import {Row, Col} from 'reactstrap';

export default class Fishes extends React.Component {
    static propTypes = {
        addToOrderFromApp: PropTypes.func
    };
    render() {
        return (
            <Row>
                Show fishes here
                    {Object.keys(this.props.fishes).map(key => (
                        <Fish
                            key={key}
                            index={key}
                            details={this.props.fishes[key]}
                            addToOrder={this.addToOrder}
                        />
                    ))}
            </Row>

        );
    }

    addToOrder = key => {
        this.props.addToOrderFromApp(key);
    };
}