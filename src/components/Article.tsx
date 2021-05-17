import React from "react";

// using props..
const Article = (props: any) => (
  <div className="card">
    <h2>{props.title}</h2>
    <h5>{props.sub_text}</h5>
    <div className="images">
      <img src={props.image} width="auto" alt={props.title} />
    </div>
    <p>{props.body}</p>
    <p>by {props.user}</p>

    <br />
  </div>
);

export default Article;
