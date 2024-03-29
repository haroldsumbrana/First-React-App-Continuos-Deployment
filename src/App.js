import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Test from "./components/test/Test";

import {Provider} from "./context";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
        <div className="App">
          <Header branding="Contact Manager"></Header>
          <div className="container">
            <div className="main-section">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/test" component={Test} />
              <Route component={NotFound} />
            </Switch>
            </div>
          </div>
        </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
