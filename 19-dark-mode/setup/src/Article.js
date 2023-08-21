import React from "react";
import moment from "moment";
const Article = ({ title, snippet, data, lenght }) => {
  return (
    <article className="post">
      <h2>{title}</h2>
      <div className="post-info">
        <span>{moment(data).format("dddd Do,YYYY")}</span>
        <span>{lenght} min read</span>
      </div>
      <p>{snippet}</p>
    </article>
  );
};

export default Article;
