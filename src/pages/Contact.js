import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
//import GoogleMapReact from "google-map-react";

class Contact extends Component {
  render() {
    return (
      <div>
        <h1>Contact US</h1>
        <p className="contac-page">
          Address Our Location ﻿You can find us on this location: <p className='contact-page'>City Road,
          Gyumri EC1V 2NX Armenia </p>contact number:<p className='contact-page'> +374 XXXXXX email:
          GoogleMapReact@gmail.com</p>
        </p>
        <iframe
          style={{ width: "393px", height: "406px" }}
          src="https://maps.google.com/maps?q=gyumri&t=k&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>

        <div className="col-md-12">
          <div className="social-icons">
            <ul>
              <li>
                <a href="https://facebook.com" target="_blank">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank ">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com" target="_blank">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://fontawesome.com/v4/icon/rss" target="_blank">
                  <i className="fa fa-rss"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
