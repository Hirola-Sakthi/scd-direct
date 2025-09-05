import React from "react";
import { Link } from "react-router";
const Banner = () => {
  return (
    <>
      <div className="homepage-banner-parent">
        <div className="homepage-banner-subParent">
          <div className="banner-content">
            <img
              src="/home/home-banner2.jpg"
              className="bannerImage"
              alt=""
              srcSet=""
            />
            <div className="banner-sub fade-in">
              <h2 className="text-light">American Vehicles <br />Import | Conversion |<br />Compliance | Retail</h2>
              {/* <h2 className="text-light text-center">Import | Conversion | Compliance | Retail</h2> */}
              <div className="banner-button">
                <Link to="/contact-us">Contact Now</Link>
                {/* <Link to="/">Learn More</Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
