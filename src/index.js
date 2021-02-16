import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import SinglePage from "./SinglePage";
import List from "./List";
import Price from "./Price";
import Contact from "./Contact";
import Demo from "./Demo";
import Mobilewaiters from "./Mobilewaiters";
import Mesinkasirrestoranonline from "./Mesinkasirrestoranonline";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Sip from "./Sip";
import "./Asik.js";
import { Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <Sip />
        <div className="container">
          <div className="col-12 text-center p-3 animate__animated animate__flash">
            <p>
              🥡
              <br />
              <small>
                <Link to="/" className="text-info">
                  Home
                </Link>{" "}
                .{" "}
                <Link to="/fitur" className="text-info">
                  Fitur
                </Link>{" "}
                .{" "}
                <Link to="/contact" className="text-info">
                  Contact
                </Link>
              </small>
            </p>
            <hr className="bg-info" />
          </div>
          <Route path="/" component={About} exact />
          <Route path="/fitur" component={List} exact />
          <Route path="/fitur/:name" component={SinglePage} />
          <Route path="/price/" component={Price} />
          <Route path="/demo/" component={Demo} />
          <Route path="/contact/" component={Contact} />
          <Route
            path="/mesinkasirrestoranonline/"
            component={Mesinkasirrestoranonline}
          />
          <Route path="/mobilewaiters/" component={Mobilewaiters} />
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));
