import React from "react";
import FeedPhotosItem from "./FeedPhotosItem";
import useFetch from "../../Hooks/useFetch";
import { PHOTOS_GET } from "../../api";
import Loading from "../Helper/Loading";
import Error from "../Helper/Error";
import styles from "./FeedPhotos.module.css";

const FeedPhotos = ({ setInfinity, page, user, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const total = 3;
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) {
        setInfinity(false);
      }
    }
    fetchPhotos();
  }, [request, user, page, setInfinity]);

  if (error) return <Error />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            setModalPhoto={setModalPhoto}
            key={photo.id}
            photo={photo}
          />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
