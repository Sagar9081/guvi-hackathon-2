import { BrowserRouter, Link, Route, Redirect, Switch } from "react-router-dom";
import React, { Component } from "react";

import Home from "./main page";
import HallForm from "./HallForm";
import "../stylesheets/home.css";

export class MainHome extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <div className="home">
            <Link className="home1" to="/">
              Home
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link className="home1" to="/booking">
              Ticket-Booking
            </Link>
          </div>

          <Switch>
            <Route path="/booking" component={HallForm} />

            <Route exact path="/" component={Home} />
            <Route path="/home">
              <Redirect to="/" />
            </Route>
            <Route path="*">
              <p>404 Page</p>
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
