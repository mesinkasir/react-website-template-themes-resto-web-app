import React from "react";
import { Link } from "react-router-dom";
const Drop = () => (
  <div className="row animate__animated animate__jello">
    <Link
      to="/fitur"
      className="btn btn-info border border-white p-3 p-md-3 col-3 col-md-6"
    >
      👨🏼‍🍳
      <br />
      User
    </Link>
    <Link
      to="/fitur"
      className="btn btn-info border border-white p-3 p-md-3 col-3 col-md-6"
    >
      🪑
      <br />
      Meja
    </Link>
    <Link
      to="/fitur"
      className="btn btn-info border border-white p-3 p-md-3 col-3 col-md-6"
    >
      🍱
      <br />
      Group
    </Link>
    <Link
      to="/price"
      className="btn btn-info border border-white p-3 p-md-3 col-3 col-md-6"
    >
      🍗
      <br />
      Menu
    </Link>
    <Link
      to="/demo"
      className="btn btn-info border border-white p-3 p-md-3 col-3 col-md-6"
    >
      💻
      <br />
      POS
    </Link>
    <Link
      to="https://mesinkasir.github.io/e-catalog/funrestoapp.pdf"
      className="btn btn-info border border-white p-3 p-md-3 col-3 col-md-6"
    >
      📊
      <br />
      Report
    </Link>
    <Link
      to="/mobilewaiters"
      className="btn btn-info border border-white p-3 p-md-3 col-3 col-md-6"
    >
      📱 <br />
      Mobile
    </Link>
    <Link
      to="/mesinkasirrestoranonline"
      className="btn btn-info border border-white p-3 p-md-3 col-3 col-md-6"
    >
      📺
      <br />
      Desktop
    </Link>
  </div>
);

export default Drop;
