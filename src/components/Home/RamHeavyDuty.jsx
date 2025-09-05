import React, { useEffect, useRef } from "react";
import { Link } from "react-router";
const RamHeavyDuty = () => {
  return (
    <>
      <div className="ram-heavy-duty-parent">
        <div className="ram-heavy-duty-subParent">
          <div className="banner-content">
            <img
              src="/home/RAM-Heavy-Duty.jpeg"
              className="bannerImage"
              alt=""
              srcSet=""
            />
            <div className="banner-sub">
              <h2 className="text-light text-center">RAM Heavy Duty</h2>
              <div className="banner-button">
                <h4 className="text-center text-white">6.4L</h4>
                <h4 className="text-center text-white">V-8</h4>
                <h4 className="text-center text-white">3</h4>
              </div>
              <div className="banner-button-buttom">
                <p className="text-center text-white">Engine</p>
                <p className="text-center text-white">Cylinder</p>
                <p className="text-center text-white">Seating</p>
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

export default RamHeavyDuty;
