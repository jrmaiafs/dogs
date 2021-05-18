import React from "react";
import styles from "./Likes.module.css";
import { ReactComponent as Heart } from "../../Assets/heart.svg";
import { ReactComponent as HeartCurtido } from "../../Assets/heart_curtido.svg";
import { LIKES_GET, PHOTO_CURTIR } from "../../api";
import useFetch from "../../Hooks/useFetch";

const Likes = ({ photo, userID }) => {
  const { data, request } = useFetch();
  const [curtida, setCurtida] = React.useState(false);

  React.useEffect(() => {
    if (data && data.ids_photo_likes) {
      const likesUser = data.ids_photo_likes.map(
        (item) => Number(item) === userID
      );
      if (likesUser[0] === true) {
        setCurtida(true);
      }
    }
  }, [data, userID]);

  React.useEffect(() => {
    async function fetchLikes() {
      const token = window.localStorage.getItem("token");
      const { url, options } = LIKES_GET(photo.id, token);
      request(url, options);
    }
    fetchLikes();
  }, [photo.id, request]);
  async function handleClick() {
    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_CURTIR(photo.id, token);
    const { json } = await request(url, options);
    setCurtida(json);
  }
  if (userID === photo.user_ID)
    return (
      <div
        className={`${styles.likes} ${styles.curtidas}`}
      >
        <span>Curtiram sua foto</span>
        <button style={{cursor: "default"}}>
          <Heart />
        </button>
        <span style={{fontSize: '1rem', fontWeight: 'normal', marginLeft: '1rem'}} >{data ? data.curtidas : photo.curtidas}</span>
      </div>
    );
  return (
    <div className={`${styles.likes} ${curtida ? styles.likesOpacity : ""}`}>
      {curtida ? (
        <button style={{cursor: "default"}}>
          <HeartCurtido />{" "}
        </button>
      ) : (
        <button style={{display: "flex", alignItems: "center"}} onClick={handleClick}>
          <span style={{fontSize: '1rem', fontWeight: 'normal', marginRight: '1rem'}}>{`${photo.author}` }</span>
          <Heart />
        </button>
      )}
      <span style={{fontSize: '1rem', fontWeight: 'normal', marginLeft: '1rem'}} >{data ? data.curtidas : photo.curtidas}</span>
    </div>
  );
};

export default Likes;
