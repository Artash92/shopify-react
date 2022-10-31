import React from "react";
import Logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

function Search(props) {
  return (
    <div>
      {/* The form */}
      <NavLink to="/">
      
        <img className="logo" src={Logo} alt="" />
      </NavLink>
       { /* <input type="text" placeholder="Search..." name="search" /> */}
    </div>
  );
}

export default Search;
