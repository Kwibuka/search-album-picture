/** @format */

import React from "react";
import "./Empty.css";
import SerachSVG from "../../assets/illustrations/search-image.png";
export default function SearchNotice() {
  return (
    <div className="empty">
      <div className="empty-image">
        <img src={SerachSVG} alt="search-Image" />
      </div>
      <p className="empty-message">
        Write valid 'Album ID Number' in search to get the album
      </p>
    </div>
  );
}
