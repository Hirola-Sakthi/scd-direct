import React from "react";

const ContactUsBanner = () => {
  return (
    <>
      <div className="contact-us-banner-parent">
        <div className="contact-us-banner-subparent">
          <div className="container">
            <div className="row">
              <div className="breadcrumb">
                <div className="pagename">
                  <h1>Contact Us</h1>
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
                    <p>Contact Us</p>
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

export default ContactUsBanner;
