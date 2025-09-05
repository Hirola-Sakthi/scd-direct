import React, { useEffect, useRef } from "react";
import { Link } from "react-router";
const Ram1500 = () => {
  return (
    <>
      <div className="ram-1500-parent">
        <div className="ram-1500-subParent">
          <div className="banner-content">
            <img
              src="/home/ram1500.avif"
              className="bannerImage"
              alt=""
              srcSet=""
            />
            <div className="banner-sub">
              <h2 className="text-light text-center">RAM 1500</h2>
              <div className="banner-button">
                <h4 className="text-center text-white">540</h4>
                <h4 className="text-center text-white">2,370</h4>
                <h4 className="text-center text-white">3 L</h4>
              </div>
              <div className="banner-button-buttom">
                <p className="text-center text-white">Maximum Horsepower</p>
                <p className="text-center text-white">Maximum Payload</p>
                <p className="text-center text-white">Hurricane Engine</p>
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

export default Ram1500;
