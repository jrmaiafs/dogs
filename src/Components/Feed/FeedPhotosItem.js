import React from "react";
import Image from "../Helper/Image";
import styles from './FeedPhotosItem.module.css'

const FeedPhotosItem = ({ photo, setModalPhoto}) => {
  function handleClick() {
    setModalPhoto(photo);
  }
  return (
    <li onClick={handleClick} className={styles.photo}>
      <Image
          src={photo.src}
          alt={`foto ampliada da(o) carrocha(o) ${photo.title}`}
        />
      <span className={styles.visualizacao}>{photo.accesses}</span>
    </li>
  );
};

export default FeedPhotosItem;
