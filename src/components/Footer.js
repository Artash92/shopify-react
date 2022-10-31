import React from "react";
import Logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

function Footer(props) {
  return (
    <div>
      {/* Footer Starts Here */}

      <div className="footer">
        <div className="conteiner">
          <div className="row">
            <div className="col-md-12">
              <div className="logo1">
                <img src={Logo} alt="" />
              </div>
            </div>
            <div className="col-md-110">
              <div className="footer-menu">
                <ul>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Help</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Privacy Policy</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">How It Works ?</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact Us</NavLink>
                  </li>
                </ul>
              </div>
            </div>
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
                    <a
                      href="https://fontawesome.com/v4/icon/rss"
                      target="_blank"
                    >
                      <i className="fa fa-rss"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Ends Here */}
    </div>
  );
}

export default Footer;
