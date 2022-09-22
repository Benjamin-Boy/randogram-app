import React from "react";
import PropTypes from "prop-types";

// Imports Scss Styles
import "./Profile.scss";
import "../../scss/style.scss";

const Profile = (props) => {
  return (
    <div className="profile-container">
      <ul>
        <li>My treks</li>
        <li>My bookmarks</li>
        <li>Difficulty</li>
        <li>
          <input type="range" />
        </li>
        <li>Duration</li>
        <li>
          <input type="range" />
        </li>
        <li className="divider"></li>
        <li>Log out</li>
      </ul>
    </div>
  );
};

Profile.propTypes = {};

export default Profile;
