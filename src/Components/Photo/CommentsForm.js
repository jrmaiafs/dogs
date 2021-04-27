import React from "react";
import useFetch from "../../Hooks/useFetch";
import {ReactComponent as Enviar} from '../../Assets/enviar.svg'
import { COMMENT_PHOTO } from "../../api";
import styles from './CommentsForm.module.css'

const CommentsForm = ({id, setComments, single}) => {
  const [comment, setComment] = React.useState('');
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const token = window.localStorage.getItem('token');
    const {url, options} = COMMENT_PHOTO(id, token, {comment});

    const {response, json} = await request(url, options);
    if (response.ok) {
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form className={`${styles.form} ${single ? styles.singlePhoto : ''} `} onSubmit={handleSubmit}>
      <textarea className={styles.textarea}
        value={comment}
        name="comment"
        id="comment"
        placeholder="comente..."
        onChange={({target}) => setComment(target.value)}
      ></textarea>
      <button className={styles.button}><Enviar /></button>
    </form>
  );
};

export default CommentsForm;
