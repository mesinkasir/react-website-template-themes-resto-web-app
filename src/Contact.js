import React from "react";
const Contact = () => (
  <div className="container animate__animated animate__backInRight">
    <div className="row">
      <div className="col-12 col-md-12 p-3 text-center">
        <h1>
          <strong>Contact</strong>
        </h1>
      </div>
      <div className="col-12 col-md-8 p-3 text-center">
        <img
          className="img-fluid rounded"
          alt="penjual mesin kasir"
          src="https://1.bp.blogspot.com/-YVnCIS3UdIU/XzpJR9HByuI/AAAAAAAALEk/ECdc7iWQMIEMTh2seBIJoUB5hPJGjGziQCLcBGAsYHQ/s960/mesin%2Bkasir%2Btablet%2Bpos%2Bhybrid.jpg"
        />
      </div>
      <div className="col-12 col-md-4 p-3">
        <div
          className="shadow rounded p-3 p-md-5 bg-white"
          style={{
            opacity: 0.6
          }}
        >
          <p>Contact Us. </p>
          <p>
            WhatsApp : <br />
            +6285646104747
          </p>
          <p>
            Call Us : <br />
            +6285331361404
          </p>
          <p>
            <a
              href="https://goo.gl/maps/V2Wxp2RcbF3cHxFC6"
              target="_blank"
              className="text-info"
            >
              Showroom.
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
);
export default Contact;
