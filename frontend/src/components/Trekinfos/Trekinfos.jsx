import React from "react";
import PropTypes from "prop-types";

const Trekinfos = (props) => {
  return (
    <div className="trekinfos">
      <div className="trekinfos-container">
        <section className="trekinfos-container-header">
          <div className="custom-close-icon">
            <div className="custom-close-icon-bar"></div>
            <div className="custom-close-icon-bar"></div>
            <div className="custom-close-icon-bar"></div>
          </div>
        </section>
        <section className="trekinfos-container-main">
          <div className="trekinfos-container-main-media"></div>
          <div className="trekinfos-container-main-infos"></div>
        </section>
      </div>
    </div>
  );
};

Trekinfos.propTypes = {};

export default Trekinfos;
