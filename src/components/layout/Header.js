import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

class Header extends Component {
  state = {
    isActive: false
  };
  render() {
    const { branding } = this.props;

    return (
      <nav className="navbar mr-auto navbar-expand-sm bg-custom py-1">
        <div className="container">
          <a href="/" className="navbar-brand col-sm-3">
            {branding}
          </a>
          <i
            onClick={() =>
              this.setState({
                isActive: !this.state.isActive
              })
            }
            className={
              this.state.isActive
                ? "icofont-ui-close"
                : "icofont-navigation-menu"
            }
            style={{
              color: "#fff",
              fontSize: "20px",
              position: "absolute",
              right: "5%"
            }}
          ></i>
          <ul
            className={
              this.state.isActive
                ? "navbar-nav col-sm-9 active"
                : "navbar-nav col-sm-9"
            }
          >
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                Add Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
Header.defaultProps = {
  branding: "My App"
};
Header.propTypes = {
  branding: PropTypes.string.isRequired
};
export default Header;
