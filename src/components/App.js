import React, {Component} from 'react';
import Header from "./Header";
import Fishes from "./Fishes";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";

export default class App extends Component {
    state = {
        fishes: {}
    };

    render() {
        return (
            <div className="App">
                <Header/>
                <Fishes/>
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
}
