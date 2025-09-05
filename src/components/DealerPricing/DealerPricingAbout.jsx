import React from "react";
import { Link } from "react-router";

const DealerPricingAbout = () => {
  return (
    <>
      <div className="dealer-pricing-about-parent">
        <div className="dealer-pricing-about-subparent">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="left-image-section">
                  <img
                    src="/dealer-pricing-images/dealer-pricing.jpeg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-5">
                <div className="right-content">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="right-title">
                        <h1>SCD Direct</h1>
                        <h2>Pre-Order Your Dream Ride at Dealer Prices</h2>
                      </div>

                      <div className="description">
                        <p>
                          SCD brings you exclusive access to dealer prices for
                          your dream vehicle. From handling shipping to ensuring
                          full compliance with Australian standards, we take
                          care of every detail. The result? A ready-to-drive
                          vehicle delivered at a cost below retail–offering
                          luxury and effortless value.
                        </p>
                      </div>
                      <div className="learn-more-button-parent">
                        <Link
                          className={`learn-more-button`}
                          to={"/contact-us"}
                        >
                          Pre Order
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="learn-more-button-mobile-parent">
              <Link className={`learn-more-button`} to={"/contact-us"}>
                Pre Order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DealerPricingAbout;
