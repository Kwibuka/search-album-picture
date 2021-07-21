/** @format */

import React from "react";
import "./Empty.css";
import SerachSVG from "../../assets/illustrations/Empty.png";
export default function Empty() {
  return (
    <div className="empty">
      <div className="empty-image">
        <img src={SerachSVG} alt="search-Image" />
      </div>
      <p className="empty-message">Ooops! It ook like ID wasn't exist</p>
    </div>
  );
}
