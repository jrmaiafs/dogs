import React from "react";
import styles from "./CommentDelete.module.css";
import { ReactComponent as ArrowDown } from "../../Assets/Arrow-down.svg";
import { ReactComponent as ArrowUp } from "../../Assets/Arrow-up.svg";
import { ReactComponent as Edit } from "../../Assets/edit.svg";
import { ReactComponent as Delete } from "../../Assets/delete.svg";
import { ReactComponent as EditS } from "../../Assets/EditS.svg";
import { COMMENT_DELETE, PHOTO_GET } from "../../api";
import useFetch from "../../Hooks/useFetch";

const CommentDelete = ({
  Dtrue,
  idComment,
  photoID,
  setComments
}) => {
  const [options, setOptions] = React.useState(false);
  const {request } = useFetch();

  function handleClick() {
    setOptions((option) => !option);
  }

  async function handleDelete() {
    const token = window.localStorage.getItem("token");
    const { url, options } = COMMENT_DELETE(idComment, token);
    const { response } = await request(url, options);
    if (response.ok) {
      fetchPhoto();
    }
  }

  async function fetchPhoto() {
    const { url, options } = PHOTO_GET(photoID);
    const {json} = await request(url, options);
    setComments(json.comments)
  }

  if (Dtrue)
    return (
      <div className={styles.container}>
        <div onClick={handleClick} className={styles.arrow}>
          {options ? <ArrowUp /> : <ArrowDown />}
        </div>
        {options && (
          <div className={styles.options}>
            <div onClick={handleDelete} className={styles.delete}>
              <Delete />
            </div>
          </div>
        )}
      </div>
    );
  else return null;
};

export default CommentDelete;
