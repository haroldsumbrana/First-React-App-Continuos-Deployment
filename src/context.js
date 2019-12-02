import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "john@gmail.com",
        phone: "123-456-789"
      },
      {
        id: 2,
        name: "James Reid",
        email: "James@gmail.com",
        phone: "256-456-789"
      },
      {
        id: 3,
        name: "Jhanohn Meck",
        email: "Jhanohn@gmail.com",
        phone: "653-456-789"
      },
      {
        id: 4,
        name: "Jack Ass",
        email: "Jack@gmail.com",
        phone: "548-456-789"
      },
      {
        id: 5,
        name: "Kate Booty",
        email: "Kate@gmail.com",
        phone: "986-456-789"
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
