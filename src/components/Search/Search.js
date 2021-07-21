import React from "react";
import classes from "./Search.module.css";

export default function Search({ getSelectedAlbum, onChangeHandler }) {
  return (
    <div className={classes.Search}>
      <form onSubmit={getSelectedAlbum}>
        <input
          type="number"
          placeholder="Search..."
          onChange={onChangeHandler}
        />
        <button type="submit">Get Album Photos By Id</button>
      </form>
    </div>
  );
}
