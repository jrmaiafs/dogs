import React from "react";
import { PHOTO_DELETE } from "../../api";
import useFetch from "../../Hooks/useFetch";
import styles from "./PhotoDelete.module.css";

const PhotoDelete = ({ id }) => {
  const { request, loading } = useFetch();

  async function handlePhotoDelete() {
    const confirm = window.confirm("Tem ceteza que deseja deletar essa foto?");
    if (confirm) {
      const token = window.localStorage.getItem("token");
      const { url, options } = PHOTO_DELETE(id, token);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }
  return (
    <>
      {loading ? (
        <button disabled className={styles.delete}>Deletar</button>
      ) : (
        <button onClick={handlePhotoDelete} className={styles.delete}>
          deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
