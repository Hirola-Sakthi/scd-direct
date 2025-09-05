import React from "react";
import { Link } from "react-router";

const AlternateSection = () => {
  return (
    <>
      <div className="home-alternate-section-parent">
        <div className="home-alternate-section-subparent">
          <div className="row">
            <div className="col-md-6">
              <div className="left-section">
                <div className="row">
                  <div className="left-content">
                    <div className="heading">
                      <h2>Left to Right Hand Drive conversions</h2>
                    </div>
                    <div className="description">
                      <p>
                        As specialists in ADR (Australian Design Rules)
                        Compliance, we ensure every vehicle meets the rigorous
                        safety, environmental, and performance standards
                        required for Australian roads.
                      </p>
                    </div>
                    <div className="learn-more-button-parent">
                      <Link to={"/contact-us"} className="learn-more-button">
                        Compliance
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-section">
                <div className="right-image">
                  <img src="/home/inside-car.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlternateSection;
