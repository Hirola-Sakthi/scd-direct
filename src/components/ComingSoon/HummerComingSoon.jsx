import React from "react";
import { Link } from "react-router";

const HummerComingSoon = () => {
  return (
    <>
      <div className="hummer-coming-soon-parent">
        <div className="hummer-coming-soon-subparent">
          <div className="container">
            <div className="hummer-coming-soon-heading-section">
              {/* <div className="subtitle">
                <h4>Our Vehicles</h4>
              </div> */}
              <div className="title">
                <h2>COMING SOON</h2>
              </div>
            </div>
            <div className="image-and-button-section">
              <div className="container">
                <div className="background-image">
                  <div className="row">
                    <div className="vehicle-button-parent">
                      <button className={`vehicle-button`}>
                        2025 GMC HUMMER EV SUV
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hummer-blurb">
              <div className="container">
                <p>
                  The 2025 GMC Hummer EV SUV is a bold, all-electric powerhouse
                  designed for those who demand both off-road capability and
                  cutting-edge technology. With up to 830 horsepower and an
                  estimated range of over 300 miles, this SUV delivers serious
                  performance while embracing a zero-emissions future.
                </p>
                <p>
                  Built for adventure, it features CrabWalk™ mode, allowing
                  diagonal movement for better maneuverability on tough terrain,
                  and Adaptive Air Suspension to handle any off-road challenge.
                  Inside, the Hummer EV SUV offers a spacious, high-tech cabin,
                  complete with Super Cruise® hands-free driving for added
                  convenience.
                </p>
              </div>
            </div>
            <div className="interested-button">
              <div className="row">
                <div className="contact-now-button">
                  <Link to={"/contact-us"}>I might be interested</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HummerComingSoon;
