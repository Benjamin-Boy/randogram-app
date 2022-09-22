import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import logo from "../../assets/images/mountain-logo.jpg";

import { FaSearch, FaUserCircle, FaPlusCircle } from "react-icons/fa";

// Imports Scss Styles
import "./Header.scss";
import "../../scss/style.scss";

const Navbar = (props) => {
  return (
    <div className="navbar-container">
      <section className="navbar-container-left">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/create">
          <div className="navbar-container-left-add">
            <FaPlusCircle className="icon create" />
          </div>
        </Link>
      </section>
      <section className="navbar-container-center">
        <div className="navbar-container-center-search">
          <FaSearch className="search" />
          <input type="text" placeholder="Search" />
        </div>
      </section>
      <section className="navbar-container-right">
        <div className="navbar-container-right-username">
          <h5>
            Hi <span>Maéva</span>
          </h5>
        </div>
        <FaUserCircle className="icon avatar" />
      </section>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
