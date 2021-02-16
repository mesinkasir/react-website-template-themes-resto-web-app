import React from "react";
import { Link } from "react-router-dom";
const Up = () => (
  <div>
    <img
      width="180"
      className="img-fluid animate__animated animate__backInLeft"
      src="https://1.bp.blogspot.com/-QCqOzhNkqAc/XuPblJ1aqoI/AAAAAAAAJ-Y/ZMZUDzqNJegqeWOWP1lEt4xQ9ar-j4LTwCK4BGAsYHg/s2000/restaurant%2Bapp%2Bcheap%2Bprice.jpg"
    />
    <h2>
      <strong>Aplikasi Restoran</strong>
    </h2>
    <p>
      <a href="/" className="text-info">
        Mesin Kasir Restoran Online
      </a>
    </p>
    <p>
      Mulai gunakan fun resto app untuk menunjang bisnis kuliner mu, website
      applikasi dalam package set fun resto web app.
    </p>
    <p>
      <Link to="/fitur" className="btn btn-info rounded-pill">
        Get Strated
      </Link>
    </p>
  </div>
);

export default Up;
