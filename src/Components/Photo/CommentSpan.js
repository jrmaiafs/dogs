import React from "react";

const CommentSpan = ({ comment, textArea }) => {

  if (!textArea) {
    return <span>{comment}</span>;
  }
  if (textArea) {
    return <input defaultValue={comment}></input>;
  }
};

export default CommentSpan;
