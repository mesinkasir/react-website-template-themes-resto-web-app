import React from "react";
import { Link } from "react-router-dom";
const ArticleList = ({ articles }) => (
  <>
    {articles.map((article, key) => (
      <Link
        className="btn btn-outline-info rounded border border-white p-3 p-md-5 col-6 col-md-4  animate__animated animate__backInLeft"
        key={key}
        to={`/fitur/${article.name}`}
      >
        <img
          className="img-fluid"
          alt="aplikasi restoran cafe rumah makan mesin kasir online"
          src={article.img}
        />
        <p>
          <strong>{article.title}</strong>
        </p>
      </Link>
    ))}
  </>
);

export default ArticleList;
