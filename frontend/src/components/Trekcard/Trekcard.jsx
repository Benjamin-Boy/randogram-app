// Imports React Properties/packages
import React from "react";
import PropTypes from "prop-types";
import { AiFillHeart } from "react-icons/ai";
import { FaMountain } from "react-icons/fa";
import { BsStopwatchFill } from "react-icons/bs";
import { GiPathDistance } from "react-icons/gi";

// Impots Scss Styles
// import "../../scss/style.scss";

const Trekcard = (props) => {
  return (
    <div className="trekcard-container">
      <section className="trekcard-container-img">
        <img src="https://picsum.photos/500" alt="rando" />
      </section>
      <section className="trekcard-container-header">
        <div className="trekcard-container-header-path">
          <GiPathDistance className="icon" />
          <h2>Tarbes - Pau</h2>
        </div>
        <div className="trekcard-container-header-bookmark">
          <AiFillHeart className="icon" />
        </div>
      </section>
      <section className="trekcard-container-footer">
        <div className="trekcard-container-footer-difficulty">
          <FaMountain className="icon" />
          <h2>Medium</h2>
        </div>
        <div className="trekcard-container-footer-duration">
          <h2>3h40</h2>
          <BsStopwatchFill className="icon" />
        </div>
      </section>
    </div>
  );
};

Trekcard.propTypes = {};

export default Trekcard;
