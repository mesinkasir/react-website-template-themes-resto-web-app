import React from "react";
import ArticleContent from "./Slug/ArticleContent";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const SinglePage = ({ match }) => {
  const name = match.params.name;
  const article = ArticleContent.find(article => article.name === name);
  return (
    <div>
      <Helmet>
        <meta
          name="google-site-verification"
          content="YxQy4XuwrF6iIorC7vGlVbk8WLSFN-C9k8RSQ0ttoTs"
        />
        <title>{article.title}</title>
        <meta
          name="description"
          content="Pastikan fun resto apps sebagai software program restoran pilihan mu, simple mudah digunakan dan harga murah include  pembuatan website restoran cafe rumah makan all in one ready online."
        />
        <meta
          content=" Aplikasi restoran cafe rumah makan - mesin kasir online fun resto web app"
          property="og:title"
        />
        <meta
          content="Pastikan fun resto apps sebagai software program restoran pilihan mu, simple mudah digunakan dan harga murah include  pembuatan website restoran cafe rumah makan all in one ready online."
          property="og:description"
        />
        <meta
          content="https://1.bp.blogspot.com/-oolLYoq-j5Q/X93ym6YAD8I/AAAAAAAALus/NZ7SFbMNI543KZaqFx129dX0ST4MBQAQACLcBGAsYHQ/w1200-h630-p-k-no-nu/TOUCHSCREEN3.png"
          property="og:image"
        />
        <meta content="https://axcora.com/getaxcoracms" property="og:author" />
        <meta
          content="Aplikasi restoran cafe rumah makan - mesin kasir online fun resto web app"
          name="facebook:title"
        />
        <meta content="website" property="og:type" />
        <meta
          content="https://www.facebook.com/mesinkasircomplete"
          property="facebook:author"
        />
        <meta
          content="https://res.cloudinary.com/hockeycorp/image/upload/v1568369085/touchscreen_yonrpa.jpg"
          name="facebook:image"
        />
        <meta
          content="Aplikasi restoran cafe rumah makan - mesin kasir online fun resto web app"
          property="og:site_name"
        />
        <meta
          content="Pastikan fun resto apps sebagai software program restoran pilihan mu, simple mudah digunakan dan harga murah include  pembuatan website restoran cafe rumah makan all in one ready online."
          property="facebook:description"
        />
        <meta content="summary_large_image" name="twitter:card" />
        <meta
          content="https://twitter.com/hockeycomp"
          property="twitter:author"
        />
        <meta content="@hockeycomp" name="twitter:site" />
        <meta
          content="https://res.cloudinary.com/hockeycorp/image/upload/v1568369085/touchscreen_yonrpa.jpg"
          name="twitter:image"
        />
        <meta
          content="Pastikan fun resto apps sebagai software program restoran pilihan mu, simple mudah digunakan dan harga murah include  pembuatan website restoran cafe rumah makan all in one ready online."
          name="twitter:description"
        />
        <meta
          content="Aplikasi restoran cafe rumah makan - mesin kasir online fun resto web app"
          name="twitter:title"
        />
        <meta content="index, follow" name="robots" />
      </Helmet>
      <div className="row">
        <div className="col-12 col-md-12 p-3 p-md-5">
          <div className="shadow rounded p-3 p-md-5 animate__animated animate__backInRight">
            <img
              className="img-fluid"
              alt="aplikasi restoran cafe rumah makan mesin kasir online"
              src={article.img}
            />
            <h1>
              <a href="/" className="text-info">
                <strong>{article.title}</strong>
              </a>
            </h1>
            <h3>{article.desc}</h3>
            {article.content.map((paragraph, key) => (
              <p className="lead" key={key}>
                {paragraph}
              </p>
            ))}
          </div>
          <p className="text-center p-3">
            <Link to="/fitur" className="text-info">
              Back to fitur
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default SinglePage;
