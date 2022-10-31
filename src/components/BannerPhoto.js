import React from "react";
import Images from "../assets/images/banner-bg.jpg";

function BannerPhoto(props) {
  return (
    <div>
      <img className="main-photo" src={Images} alt="" />
    </div>
  );
}

export default BannerPhoto;
