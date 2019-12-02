import React, { Component } from "react";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import AddContact from "./components/contacts/AddContact";

import {Provider} from "./context";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager"></Header>
          <div className="container">
            <div className="main-section">
            <AddContact></AddContact>
            <Contacts></Contacts>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}
export default App;