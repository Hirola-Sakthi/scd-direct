import React from "react";
import { Link } from "react-router";

const ExportAbout = () => {
  return (
    <>
      <div className="export-about-parent">
        <div className="export-about-subparent">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="left-image-section">
                  <img src="/export-images/export.avif" alt="" />
                </div>
              </div>
              <div className="col-md-5">
                <div className="right-content">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="right-title">
                        <h1>EXPORT</h1>
                        {/* <h2>Pre-Order Your Dream Ride at Dealer Prices</h2> */}
                      </div>

                      <div className="description">
                        <p>
                          SCD Direct also supplies American vehicles to other
                          right hand drive markets including India, South
                          Africa, UK and New Zealand.
                        </p>
                        <p>
                          Chat to us if you’re in any of these places and
                          looking for end to end delivery of your complete and
                          compliant American vehicle.{" "}
                        </p>
                      </div>
                      <div className="learn-more-button-parent">
                        <Link
                          className={`learn-more-button`}
                          to={"/contact-us"}
                        >
                          Contact now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="learn-more-button-mobile-parent">
              <Link className={`learn-more-button`} to={"/contact-us"}>
                Contact now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExportAbout;
