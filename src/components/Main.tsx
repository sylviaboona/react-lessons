import React from "react";
import Article from "./Article";
import { articles } from "../variables/articles";

const Main = () => (
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

export default Main;
