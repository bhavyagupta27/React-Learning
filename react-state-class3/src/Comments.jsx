import { useState } from "react";
import "./Comments.css";
import CommentsForm from "./CommentsForm"; // 1. Import CommentsForm

export default function Comments() {
  let [comments, setComments] = useState([
    {
      username: "@sk",
      remarks: "great",
      rating: 4,
    },
  ]);

  let addNewComment = (comment) => {
    setComments((currComments) => [...currComments, comment]);
  };

  return (
    <>
      <div>
        <h4>All comments</h4>
        {/* 2. Map through all comments instead of hardcoding comments[0] */}
        {comments.map((comment, idx) => (
          <div className="comment" key={idx}>
            <span>{comment.remarks}</span>
            &nbsp;
            <span>(rating={comment.rating})</span>
            <p>{comment.username}</p>
          </div>
        ))}
      </div>
      <hr />
      <CommentsForm addNewComment={addNewComment} />
    </>
  );
}