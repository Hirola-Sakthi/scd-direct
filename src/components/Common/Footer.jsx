import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <>
      <div className={`footer-parent`}>
        <div className="footer-subparent">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="footer-about-company">
                  <div className="row">
                    <div className="footer-logo">
                      <img src="/mainlogo.png" alt="" />
                    </div>
                    <div className="about-company">
                      <p>
                        Our mission is to make premium American vehicles
                        accessible to Australian drivers by offering world-class
                        compliance services, industry-leading technology, and
                        unparalleled customer support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className={`explore-links`}>
                  <div className="row">
                    <div className="title">
                      <h4>Vehicles</h4>
                    </div>
                    <div className="links">
                      <div className="row">
                        <Link to={"/ford150"}>Ford 150</Link>
                        <Link to={"/ford-super-duty"}>Ford Super Duty</Link>
                        <Link to={"/ram-1500-rho"}>RAM 1500</Link>
                        <Link to={"/ram-heavy-duty"}>RAM Heavy Duty</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className={`explore-links`}>
                  <div className="row">
                    <div className="title">
                      <h4>Explore</h4>
                    </div>
                    <div className="links">
                      <div className="row">
                        <Link to={"/"}>Home</Link>
                        <Link to={"/about-us"}>About Us</Link>
                        <Link to={"/coming-soon"}>Coming Soon</Link>
                        <Link to={"/dealer-pricing"}>Dealer Pricing</Link>
                        <Link to={"/adr-compliance"}>ADR Compliance</Link>
                        <Link to={"/export"}>Export</Link>
                        <Link to={"/blogs"}>Blogs</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className={`contact-info`}>
                  <div className="row">
                    <div className="title">
                      <h4>Contact Us</h4>
                    </div>
                    <div className="info">
                      <div className="row">
                        <div className="icon">
                          <img src="/common/location.png" alt="" />
                        </div>
                        <div className="content">
                          <h5>Address</h5>
                          <p>
                            24 Terrence Rd Brendale, Queensland, Australia 4500
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="info">
                      <div className="row">
                        <div className="icon">
                          <img src="/common/phone.png" alt="" />
                        </div>
                        <div className="content">
                          <h5>Phone</h5>
                          <a href="tel:+61408700920">+61408700920</a>
                        </div>
                      </div>
                    </div>
                    <div className="info">
                      <div className="row">
                        <div className="icon">
                          <img src="/common/mail.png" alt="" />
                        </div>
                        <div className="content">
                          <h5>Email</h5>
                          <a href="mailto:info@scddirect.com.au">
                            info@scddirect.com.au
                          </a>
                        </div>
                      </div>
                    </div>
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

export default Footer;
