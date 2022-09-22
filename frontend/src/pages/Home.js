// Imports React Properties/packages
import React from "react";
import PropTypes from "prop-types";

// Imports React Components
import Trekcard from "../components/Trekcard/Trekcard";
import Featuring from "../components/Featuring/Featuring";
import Profile from "../components/Profile/Profile";

// Impots Scss Styles
// import "../scss/style.scss";

const Home = (props) => {
  return (
    <div className="home-container">
      <section className="home-container-trekcards">
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
        <Trekcard />
        <Trekcard />
        <Trekcard />
      </section>
      <aside className="home-container-featuring">
        <Featuring />
      </aside>
      <section className="home-container-profile">
        <Profile />
      </section>
    </div>
  );
};

Home.propTypes = {};

export default Home;
