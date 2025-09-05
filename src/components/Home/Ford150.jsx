import React, { useEffect, useRef } from "react";
import { Link } from "react-router";
const Ford150 = () => {
  return (
    <>
      <div className="ford-150-parent">
        <div className="ford-150-subParent">
          <div className="banner-content">
            <img
              src="/home/ford150.webp"
              className="bannerImage"
              alt=""
              srcSet=""
            />
            <div className="banner-sub">
              <h2 className="text-light text-center">Ford 150</h2>
              <div className="banner-button">
                <h4 className="text-center text-white">3.5L</h4>
                <h4 className="text-center text-white">5.2L</h4>
                <h4 className="text-center text-white">4×4</h4>
              </div>
              <div className="banner-button-buttom">
                <p className="text-center text-white">V6 EcoBoost</p>
                <p className="text-center text-white">V8 Engine</p>
                <p className="text-center text-white">Drive Type</p>
              </div>
              <div className="banner-button">
                <Link to="/">Contact Now</Link>
                <Link to="/">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ford150;
