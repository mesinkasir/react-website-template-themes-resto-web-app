import React from "react";
import Down from "./Slug/Down";
import Up from "./Slug/Up";
import { Helmet } from "react-helmet";
import Drop from "./Slug/Drop";
const About = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="google-site-verification"
          content="YxQy4XuwrF6iIorC7vGlVbk8WLSFN-C9k8RSQ0ttoTs"
        />
        <title>
          Aplikasi restoran cafe rumah makan - mesin kasir online fun resto web
          app
        </title>
        <meta
          name="description"
          content="Pastikan fun resto apps sebagai software program restoran pilihan mu, simple mudah digunakan dan harga murah include  pembuatan website restoran cafe rumah makan all in one ready online."
        />
        <meta
          content="Aplikasi restoran cafe rumah makan - mesin kasir online fun resto web app"
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
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-2 p-3 text-center animate__animated animate__backInLeft">
            <div className="row">
              <Drop />
            </div>
          </div>
          <div className="col-12 col-md-8 p-3 p-md-5 text-center animate__animated animate__backInDown">
            <Up />
          </div>
          <div className="col-12 col-md-2 p-3 text-center animate__animated animate__backInRight">
            <div className="row">
              <Down />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
