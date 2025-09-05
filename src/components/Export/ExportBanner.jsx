import React from "react";

const ExportBanner = () => {
  return (
    <>
      <div className="export-banner-parent">
        <div className="export-banner-subparent">
          <div className="container">
            <div className="row">
              <div className="breadcrumb">
                <div className="pagename">
                  <h1>Export</h1>
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
                    <p>Export</p>
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

export default ExportBanner;
