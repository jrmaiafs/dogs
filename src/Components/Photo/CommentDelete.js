import React from "react";
import styles from "./CommentDelete.module.css";
import { ReactComponent as ArrowDown } from "../../Assets/Arrow-down.svg";
import { ReactComponent as ArrowUp } from "../../Assets/Arrow-up.svg";
import { ReactComponent as Edit } from "../../Assets/edit.svg";
import { ReactComponent as Delete } from "../../Assets/delete.svg";

const CommentDelete = () => {
  const [edit, setEdit] = React.useState(false);
  function handleClick() {
    setEdit((edit) => !edit);
  }
  return (
    <div class={styles.container}>
      <div onClick={handleClick} className={styles.arrow}>
        {edit ? <ArrowUp /> : <ArrowDown />}
      </div>
      {edit && (
        <div className={styles.options}>
          <div class={styles.edit}>
            <Edit />
          </div>
          <div class={styles.delete}>
            <Delete />
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentDelete;
