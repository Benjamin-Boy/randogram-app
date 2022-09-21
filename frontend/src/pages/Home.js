// Imports React Properties/packages
import React from "react";
import PropTypes from "prop-types";

// Imports React Components
import Trekcard from "../components/Trekcard/Trekcard";
import Trekinfos from "../components/Trekinfos/Trekinfos";

// Impots Scss Styles
import "../scss/style.scss";

const Home = (props) => {
  return (
    <div className="home-container">
      <Trekcard />
      <Trekcard />
      <Trekcard />
      <Trekcard />
      <Trekcard />
      <Trekcard />
      <Trekcard />
      <Trekcard />
      <Trekcard />
      <Trekcard />
      <Trekcard />
      <Trekcard />
      <Trekcard />
      <Trekcard />
      <Trekcard />
      <Trekcard />
      <Trekcard />
      <Trekcard />
      <Trekcard />
      <Trekcard />
      <Trekcard />

      {/* <Trekinfos /> */}
    </div>
  );
};

Home.propTypes = {};

export default Home;
