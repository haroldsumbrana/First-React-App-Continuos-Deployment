import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from 'axios';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = (id, dispatch) => {
    axios
    .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => dispatch({ type:
    'DELETE_CONTACT', payload: id}));
  };
  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const {dispatch} = value;
          return (
            <div className="contact-section card card-body my-4">
              <h4>
                {name}
                <i
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    })
                  }
                  className="icofont-rounded-down"
                ></i>
                <i
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  className="icofont-ui-close"
                ></i>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
};
Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
export default Contact;
