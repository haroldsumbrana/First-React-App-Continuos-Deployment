import React, { Component } from "react";

class AddContact extends Component {
 
  constructor(props){
      super(props);
      this.nameInput = React.createRef();
      this.emailInput = React.createRef();
      this.phoneInput = React.createRef();
  }
  onSubmit = e => {
    e.preventDefault();
    const contact = {
        name: this.nameInput.current.value,
        email: this.emailInput.current.value,
        phone: this.phoneInput.current.value
    }
    console.log(contact);
  };
  static defaultProps = {
      name: 'James',
      email: 'james@gmail.com',
      phone: '111-111-111-1'
  }
  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input
                label="Name"
                className="form-control form-control-lg"
                name="name"
                placeholder="Enter Name"
                type="text"
                defaultValue={name}
                ref={this.nameInput}
                
              />
            </div>
            <div className="form-group">
              <input
                className="form-control form-control-lg"
                label="Email"
                name="email"
                type="email"
                placeholder="Enter Email"
                defaultValue={email}
                ref={this.emailInput}
                
              />
            </div>
            <div className="form-group">
              <input
                className="form-control form-control-lg"
                label="Phone"
                name="phone"
                type="text"
                placeholder="Enter Phone"
                defaultValue={phone}
                ref={this.phoneInput}
                
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Add Contact"
                className="btn btn-dark btn-block"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
