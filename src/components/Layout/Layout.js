import React, { Fragment, useState } from "react";
import SelectedAlbum from "../AlbumPhotos/SelectedAlbum";
import Search from "../Search/Search";
import Spinner from "../UI/Spinner";
import SearchNotice from "../UI/SearchNotice";
import Empty from "../UI/Empty";

export default function Layout() {
  const [selectedUlbumId, setSelectedUlbumId] = useState("");
  const [albumPhotos, setAlbumPhotos] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [error, setError] = useState("");
  const [isId, setIsId] = useState(false);

  const onChangeHandler = (event) => {
    setSelectedUlbumId(event.target.value);
  };

  const getSelectedAlbumHandler = (event) => {
    if (selectedUlbumId) {
      setIsId(true);
    }
    event.preventDefault();
    setIsloading(true);
    fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${selectedUlbumId}`
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setAlbumPhotos(result);
        if (result.length === 0) {
          setEmpty(true);
        } else {
          setEmpty(false);
        }
        setIsloading(false);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <Fragment>
      <Search
        onChangeHandler={onChangeHandler}
        getSelectedAlbum={getSelectedAlbumHandler}
      />
      {isLoading ? (
        <Spinner />
      ) : empty ? (
        <Empty />
      ) : (
        <SelectedAlbum albumPhotos={albumPhotos} />
      )}
      {error && <p>{error}</p>}
      {!isId && <SearchNotice />}
    </Fragment>
  );
}
