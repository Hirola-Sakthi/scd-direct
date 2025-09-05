import React from "react";
import { Link } from "react-router";

const ADRComplianceAbout = () => {
  return (
    <>
      <div className="adr-compliance-about-parent">
        <div className="adr-compliance-about-subparent">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="left-image-section">
                  <img
                    src="/adr-compliance-images/adr-compliance.avif"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-5">
                <div className="right-content">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="right-title">
                        <h1>ADR COMPLIANCE</h1>
                      </div>

                      <div className="description">
                        <p>
                          As specialists in ADR (Australian Design Rules)
                          Compliance with a network of Australia’s top
                          compliance engineers, SCD Direct will ensure your
                          vehicle meets the rigorous safety, environmental, and
                          performance standards required for Australian roads.
                        </p>
                      </div>
                      <div className="learn-more-button-parent">
                        <Link to={"/contact-us"} className="learn-more-button">
                          Contact now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="learn-more-button-mobile-parent">
              <Link to={"/contact-us"} className="learn-more-button">
                Contact now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ADRComplianceAbout;
