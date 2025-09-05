import React from "react";

const ContactUsInfo = () => {
  return (
    <>
      <div className="contact-us-info-parent">
        <div className="contact-us-info-subparent">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="left-image-section">
                  <img src="/contact-us-images/contact-us-info.jpeg" alt="" />
                </div>
              </div>
              <div className="col-md-5">
                <div className="right-content">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="right-title">
                        <h2>Get in Touch</h2>
                      </div>

                      <div className="contact-info">
                        <div className="row">
                          <div className="info">
                            <div className="row">
                              <div className="icon">
                                <img src="/contact-us-images/location-black.png" alt="" />
                              </div>
                              <div className="content">
                                <h5>Address</h5>
                                <p>
                                  21 Harvey St North, Eagle Farm, Queensland,
                                  Australia 4500
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="info">
                            <div className="row">
                              <div className="icon">
                                <img src="/contact-us-images/phone-black.png" alt="" />
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
                                <img src="/contact-us-images/mail-black.png" alt="" />
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsInfo;
