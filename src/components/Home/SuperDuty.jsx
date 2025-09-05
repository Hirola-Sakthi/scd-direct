import React, { useEffect, useRef } from "react";
import { Link } from "react-router";
const SuperDuty = () => {
  return (
    <>
      <div className="super-duty-parent">
        <div className="super-duty-subParent">
          <div className="banner-content">
            <img
              src="/home/super-duty.jpeg"
              className="bannerImage"
              alt=""
              srcSet=""
            />
            <div className="banner-sub">
              <h2 className="text-light text-center">Super Duty</h2>
              <div className="banner-button">
                <h4 className="text-center text-white">40,000 lbs.</h4>
                <h4 className="text-center text-white">8,000 lbs.</h4>
                <h4 className="text-center text-white">6</h4>
              </div>
              <div className="banner-button-buttom">
                <p className="text-center text-white">Available Towing</p>
                <p className="text-center text-white">Payload</p>
                <p className="text-center text-white">Seating Capacity</p>
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

export default SuperDuty;
