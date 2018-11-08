import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import NotFound from "./NotFound";
import Header from "./Header";

const Router = () => {
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Header}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
};
export default Router;