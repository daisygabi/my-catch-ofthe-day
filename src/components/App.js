import React, {Component} from 'react';
import Header from "./Header";
import Fishes from "./Fishes";
import Order from "./Order";
import Inventory from "./Inventory";

export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Fishes/>
                <Order/>
                <Inventory/>
            </div>
        );
    }

    componentDidMount() {
        alert("componentDidMount");
    }
}
