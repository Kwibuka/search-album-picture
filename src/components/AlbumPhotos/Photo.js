import React from "react";
import classes from "./SelectedAlbum.module.css";

export default function Photo(props) {
  return (
    <div className={classes.PhotoContainer}>
      <div className={classes.Image}>
        <img src={props.image} alt={props.title} />
      </div>
      <p>{props.title}</p>
    </div>
  );
}
