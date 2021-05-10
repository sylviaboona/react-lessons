import React from "react";
interface IArticle{
    title:string;
    sub_text:string;
    image:string;
    body:string;
    user:string;
} 

const Article:React.FC<IArticle>= (props) => {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <h5>{props.sub_text}</h5>
      <div className="images">
        <img src={props.image} width="auto" alt="" />
      </div>
      <p>{props.body}</p>
      <p>by {props.user}</p>

      <br />
    </div>
  );
};

export default Article;
