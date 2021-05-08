import React from "react";
import { UserContext } from "../../UserContext";
import CommentsForm from "./CommentsForm";
import styles from "./PhotoComments.module.css";
import CommentDelete from "./CommentDelete";

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const { login } = React.useContext(UserContext);
  const refUl = React.useRef();

  React.useEffect(() => {
    refUl.current.scrollTop = refUl.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul
        ref={refUl}
        className={`${styles.comments} ${
          props.single ? styles.singlePhoto : ""
        }`}
      >
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <div className={styles.boxComment}>
              <b>{comment.comment_author}: </b>
              <span>{comment.comment_content}</span>
            </div>
            <CommentDelete />
          </li>
        ))}
      </ul>
      {login && (
        <CommentsForm
          single={props.single}
          setComments={setComments}
          id={props.id}
        />
      )}
    </>
  );
};

export default PhotoComments;
