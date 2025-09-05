import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

const AboutCompany = () => {
  return (
    <>
      <div className="about-company-parent">
        <div className={`about-company-subparent`}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="left-image-section">
                  <img src="/ram1500rho/ram-left-alternate.jpg" alt="" />
                </div>
              </div>
              <div className="col-md-5">
                <div className="right-content">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="right-title">
                        <h1>About Us</h1>
                      </div>

                      <div className="description">
                        <p>
                          SCD Direct is Australia’s trusted specialist in
                          bringing American vehicles to the road. Founded by
                          Steve, a respected leader in the industry, and
                          supported the country’s top compliance engineers, SCD
                          combines expertise, precision, and passion to deliver
                          outstanding results.
                        </p>
                        <p>
                          We handle everything from ADR compliance and
                          right-hand-drive conversions to retail and dealer
                          access, ensuring a seamless process from start to
                          finish to bring you your dream vehicle.
                        </p>
                        <p>
                          SCD’s longstanding relationships with Ford and RAM,
                          and its network of American partners, allows us to
                          offer you the very best in quality and value. Whether
                          it’s importing, converting, or delivering your dream
                          car, SCD takes care of every detail with a focus on
                          quality and safety.
                        </p>
                        <p>
                          SCD has longstanding partnerships with Ford, RAM, and
                          a trusted network of American automotive experts that
                          enable us to deliver unparalleled quality, value, and
                          exclusivity. These strong relationships grant us
                          access to the finest vehicles and dealer pricing,
                          ensuring our customers receive exceptional value
                          without compromise.{" "}
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

export default AboutCompany;
