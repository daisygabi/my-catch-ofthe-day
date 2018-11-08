import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import NotFound from "./NotFound";
import StorePicker from "./StorePicker";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={StorePicker}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
);
export default Router;