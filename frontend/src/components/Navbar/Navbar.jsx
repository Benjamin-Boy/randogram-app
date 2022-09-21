import React from "react";
import PropTypes from "prop-types";

import {
  FaSearch,
  FaUserCircle,
  FaSignOutAlt,
  FaPlusCircle,
} from "react-icons/fa";

const Navbar = (props) => {
  return (
    <div className="navbar-container">
      <section className="navbar-container-left">
        <div className="navbar-container-left-burger">
          <FaPlusCircle className="icon" />
        </div>
      </section>
      <section className="navbar-container-center">
        <div className="navbar-container-center-search-fake">
          <FaSearch className="search" />
          <input type="text" placeholder="Search" disabled />
        </div>
        {/* <div className="navbar-container-center-search-fake">
          <input type="text" placeholder="Search" />
          <FaSearch />
        </div> */}
      </section>
      <section className="navbar-container-right">
        <FaUserCircle className="icon" />
        <FaSignOutAlt className="icon" />
      </section>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
