import React, { useState } from "react";
import classes from "./SelectedAlbum.module.css";
import Photo from "./Photo";

export default function SelectedAlbum({ albumPhotos }) {
  const imageGallery = albumPhotos.map((image, i) => {
    return <Photo key={i} image={image.thumbnailUrl} title={image.title} />;
  });

  return <div className={classes.SelectedAlbumContainer}>{imageGallery}</div>;
}
