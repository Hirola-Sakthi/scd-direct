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
              <div className="brand-name">
                <h3 className="">2025 Ford Bronco</h3>
              </div>
            </div>
            <div className="image-and-button-section">
              <div className="container">
                <div className="background-image">
                  <div className="row">
                    {/* <div className="vehicle-button-parent">
                      <button
                        className={`vehicle-button`}
                      >
                        2025 Ford Bronco
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="hummer-blurb">
              <div className="container">
                <p>
                  The 2025 Ford Bronco continues its legacy as an iconic 4x4
                  built for adventure, blending rugged capability with modern
                  innovation. Designed for explorers and outdoor enthusiasts,
                  the Bronco offers impressive off-road performance, selectable
                  drive modes, and a powerful turbocharged engine lineup to take
                  on any terrain with confidence.
                </p>
                <p>
                  With its removable doors and roof, the Bronco delivers an
                  open-air driving experience that connects you to the trail
                  like never before. Inside, the cabin features a durable yet
                  comfortable interior, equipped with the latest
                  technology—including an intuitive SYNC® infotainment system
                  and advanced driver-assist features for added control and
                  safety. Whether you're conquering rocky trails or cruising the
                  highway, the 2025 Ford Bronco is built to go wherever
                  adventure leads.
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
