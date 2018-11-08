import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import NotFound from "./NotFound";
import StorePicker from "./StorePicker";
import App from "./App";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={StorePicker}/>
            <Route exact path="/store/:storeId" component={App}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
);
export default Router;