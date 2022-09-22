// Imports React Properties/packages
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { AiFillHeart } from "react-icons/ai";
import { FaMountain } from "react-icons/fa";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";
import { GoTriangleDown } from "react-icons/go";

// Imports Scss Styles
import "./Trekcard.scss";
import "../../scss/style.scss";

const Trekcard = ({ featuring }) => {
  return (
    <Link to="/treks">
      <div className="trekcard-container">
        <section className="trekcard-container-img">
          <img src="https://picsum.photos/500" alt="rando" />
        </section>
        <section className="trekcard-container-header">
          <div className="trekcard-container-header-bookmark">
            <AiFillHeart className="icon bookmark" />
          </div>
        </section>
        <div className="trekcard-container-background">
          <section className="trekcard-container-footer">
            <div className="trekcard-container-footer-top">
              <div className="trekcard-container-footer-top-destination">
                <h4>Lac de Gaube -</h4>
                <h5>Hautes Pyrénées</h5>
              </div>
              <div className="featuring-container-footer-top-difficulty">
                <FaMountain className="icon difficulty" />
              </div>
            </div>
            <div className="trekcard-container-footer-stats">
              <div className="trekcard-container-footer-stats-top">
                <h6>
                  <FiArrowUpRight className="icon arrow-up" /> 265m+
                </h6>
                <h6>
                  <FiArrowDownRight className="icon arrow-down" /> 245m-
                </h6>
                <h6>
                  Niveau : <span>Facile</span>
                </h6>
              </div>
              <div className="trekcard-container-footer-stats-bottom">
                <h6>12km - 1h30</h6>
              </div>
              <div className="trekcard-container-footer-stats-description">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate, deserunt.
                </p>
              </div>
              <div className="trekcard-container-footer-stats-goto">
                <GoTriangleDown />
              </div>
            </div>
          </section>
        </div>
      </div>
    </Link>
  );
};

Trekcard.propTypes = {};

export default Trekcard;
