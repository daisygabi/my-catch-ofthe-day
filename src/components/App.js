import React, {Component} from 'react';
import Header from "./Header";
import Fishes from "./Fishes";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";

export default class App extends Component {
    state = {
        fishes: {},
        order: {}
    };

    render() {
        return (
            <div className="App">
                <Header/>
                <Fishes fishes={this.state.fishes} addToOrderFromApp={this.addToOrderFromApp}/>
                <Order/>
                <Inventory loadSampleFishes={this.loadSamplesFishes}/>
            </div>
        );
    }

    componentDidMount() {
    }

    loadSamplesFishes = () => {
        this.setState({fishes: sampleFishes});
    };

    addToOrderFromApp = key => {
        // take a copy of the order
        const order = {...this.state.order};
        // add a new item in the order or update de number in the found order
        order[key] = order[key] + 1 || 1;
        // update state of the order
        this.setState({order: order});
    };
}
