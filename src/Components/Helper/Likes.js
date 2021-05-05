import React from "react";
import styles from "./Likes.module.css";
import { ReactComponent as Heart } from "../../Assets/heart.svg";
import { ReactComponent as HeartCurtido } from "../../Assets/heart_curtido.svg";
import { PHOTO_CURTIR } from "../../api";
import useFetch from "../../Hooks/useFetch";

const Likes = ({ photo, userID }) => {
  const { data, request } = useFetch();
  const [curtida, setCurtida] = React.useState(false);

  React.useEffect(() => {
    if (data && data.ids_photo_likes) {
      const likesUser = data.ids_photo_likes.map(
        (item) => Number(item) === userID
      );
      console.log(likesUser);
      if (likesUser[0] === true) {
        setCurtida(true);
      }
    }
    // handleClick()
  }, [data, userID]);

  React.useEffect(() => {
    async function fetchLikes() {
      const token = window.localStorage.getItem("token");
      const { url, options } = PHOTO_CURTIR(token);
      const { json } = await request(url, options);
      setCurtida(json);
    }
    fetchLikes()
  }, []);
  async function handleClick() {
    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_CURTIR(photo.id, token);
    const { response, json } = await request(url, options);
    setCurtida(json);
  }
  return (
    <div  className={`${styles.likes} ${curtida ? styles.likesOpacity : ''}`} >
      {curtida ? (
        <button >
          <HeartCurtido />{" "}
        </button>
      ) : (
        <button className={`${styles.likes}`} onClick={handleClick}>
          <Heart />
        </button>
      )}
      <span>{data ? data.curtidas : photo.curtidas}</span>
    </div>
  );
};

export default Likes;
