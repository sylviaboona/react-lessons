import React from "react";
// importing articles from the variable/articles.ts
import { articles } from "../variables/articles";


import Article from "./Article";

const Main = () => {
  return (
    <div className="main">
      {articles.map((article) => (
        <Article
          title={article.title}
          image={article.image}
          sub_text={article.sub_text}
          user={article.user}
          body={article.body}
        />
      ))}
    </div>
  );
};

export default Main;
