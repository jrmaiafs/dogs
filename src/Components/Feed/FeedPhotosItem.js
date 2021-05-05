import React from "react";
import Image from "../Helper/Image";
import Likes from "../Helper/Likes";
import styles from "./FeedPhotosItem.module.css";
import { UserContext } from "../../UserContext";

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  const { login, data } = React.useContext(UserContext);
  function handleClick() {
    setModalPhoto(photo);
  }
  return (
    <li className={styles.photoLi}>
      <div onClick={handleClick} className={styles.photo}>
        <Image
          src={photo.src}
          alt={`foto ampliada da(o) carrocha(o) ${photo.title}`}
        />
        <span className={styles.visualizacao}>{photo.accesses}</span>
      </div>
      {login && data.id !== photo.user_ID && <Likes userID={data.id} photo={photo} />}
    </li>
  );
};

export default FeedPhotosItem;
