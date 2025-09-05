import React from "react";

const ADRComplianceBanner = () => {
  return (
    <>
      <div className="adr-compliance-banner-parent">
        <div className="adr-compliance-banner-subparent">
          <div className="container">
            <div className="row">
              <div className="breadcrumb">
                <div className="pagename">
                  <h1>ADR COMPLIANCE</h1>
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
                    <p>ADR COMPLIANCE</p>
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

export default ADRComplianceBanner;
