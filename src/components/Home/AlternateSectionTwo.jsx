import React from "react";
import { Link } from "react-router";

const AlternateSectionTwo = () => {
  return (
    <>
      <div className="home-alternate-two-section-parent">
        <div className="home-alternate-two-section-subparent">
          <div className="row">
            <div className="col-md-6">
              <div className="left-section">
                <div className="row">
                  <div className="left-content">
                    <div className="heading">
                      <h2>Experience Dealer Access</h2>
                    </div>
                    <div className="description">
                      <p>
                        SCD’s network of American partners can make it possible
                        to bring your dream vehicle home – at Dealer prices.
                      </p>
                    </div>
                    <div className="learn-more-button-parent">
                      <Link to={"/contact-us"} className="learn-more-button">
                        Pre Order
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-section">
                <div className="right-image">
                  <img src="/home/hummer-alternate-left.jpeg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlternateSectionTwo;
