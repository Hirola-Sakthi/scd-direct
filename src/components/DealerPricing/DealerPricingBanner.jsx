import React from "react";

const DealerPricingBanner = () => {
  return (
    <>
      <div className="dealer-pricing-banner-parent">
        <div className="dealer-pricing-banner-subparent">
          <div className="container">
            <div className="row">
              <div className="breadcrumb">
                <div className="pagename">
                  <h1>Dealer Pricing</h1>
                </div>
                <div className="breadcrum-links">
                  <div className="current-page">
                    <a href="/">Home</a>
                    <div className="icon">
                      <img
                        src="/about/icons8-right-arrow-100.png"
                        alt="arrow"
                      />
                    </div>
                    <p>Dealer Pricing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DealerPricingBanner;
