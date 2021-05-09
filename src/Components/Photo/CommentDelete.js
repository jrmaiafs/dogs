import React from "react";
import styles from "./CommentDelete.module.css";
import { ReactComponent as ArrowDown } from "../../Assets/Arrow-down.svg";
import { ReactComponent as ArrowUp } from "../../Assets/Arrow-up.svg";
import { ReactComponent as Edit } from "../../Assets/edit.svg";
import { ReactComponent as Delete } from "../../Assets/delete.svg";
import { ReactComponent as EditS } from "../../Assets/EditS.svg";

const CommentDelete = ({idComment, commentPostId}) => {
  const [options, setOptions] = React.useState(false);
  const [edit, setEdit] = React.useState(true);

  function handleClick() {
    setOptions((option) => !option);
  }
  function handleEdit() {
    setEdit((edit) => !edit)
  }

  function handleDelete() {
    
  }

  return (
    <div className={styles.container}>
      <div onClick={handleClick} className={styles.arrow}>
        {options ? <ArrowUp /> : <ArrowDown />}
      </div>
      {options && (
        <div className={styles.options}>
          {/* <div onClick={handleEdit} className={styles.edit}>
            {edit ? <Edit /> : <EditS />}
          </div> */}
          <div onClick={handleDelete} className={styles.delete}>
            <Delete />
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentDelete;
