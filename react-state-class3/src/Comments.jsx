import { useState } from "react";

export default function Comments() {
  let [comments, setComments] = useState([
    {
      username: "@sk",
      remarks: "great",
      rating: 4,
    },
  ]);

  return (
    <div>
      <h4>All comments</h4>
      <div className="comment">
        <span>{comments[0].remarks}</span>
        &nbsp;
        <span>(rating={comments[0].rating})</span>
        <p>{comments[0].username}</p>
      </div>
    </div>
  );
}