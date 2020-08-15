import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import About from "./About/About";
import EventStories from "./EventStories/EventStories";
import Sponsors from "./Sponsors/Sponsors";
import Home from "./App";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                <Route path="/" exact component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/EventStories" component={EventStories} />
                    <Route path="/Sponsors" component={Sponsors} />
                </Switch>
            </Router>
        )
    }
}