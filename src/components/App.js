import React, {Component} from 'react';
import Header from "./Header";
import Fishes from "./Fishes";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import {Container, Row, Col} from "reactstrap";

export default class App extends Component {
    state = {
        fishes: {},
        order: {}
    };

    render() {
        return (
            <div>
                <Header/>
                <Container fluid style={{background: '#28Fc22'}}>
                    <Row>
                        <Col xs={12} sm={3} md={4} lg={5} style={{background: '#28FcCC'}}>
                            <Fishes
                                    fishes={this.state.fishes}
                                    addToOrderFromApp={this.addToOrderFromApp}/>
                        </Col>
                        <Col xs={6} sm={6} md={4} lg={2} style={{background: '#28FcFF'}}>
                            <Order
                                fishes={this.state.fishes}
                                order={this.state.order}
                                removeFishFromOrder={this.removeFishFromOrder}/>
                        </Col>
                        <Col xs={6} sm={3} md={4} lg={5} style={{background: '#280000'}}>
                            <Inventory
                                    data={this.loadSamplesFishes}
                                    fishes={this.state.fishes}
                                    updateFish={this.updateFish}/>
                        </Col>
                    </Row>
                </Container>
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
        if(order[key] === undefined) {
            order[key] = 0;
        }
        order[key] = order[key] + 1;
        // update state of the order
        this.setState({order: order});
    };

    removeFishFromOrder = key => {
        // get copy of state
        const order = {...this.state.order};
        // update the order
        delete order[key];
        // update the state
        this.setState({order: order});
    };

    updateFish = (key, newFish) => {
        // get copy of state
        const fishes = {...this.state.fishes};
        // update the fish
        fishes[key] =  newFish;
        // update the state
        this.setState({fishes});
    };
}