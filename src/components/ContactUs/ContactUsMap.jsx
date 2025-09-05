import React from "react";

const ContactUsMap = () => {
  return (
    <>
      <div className="contact-us-map-parent">
        <div className="contact-us-map-subparent">
          <div className="container">
            <div className="contact-us-main-map">
              <div className="row">
                <div className={`col-md-12`} >
                  <iframe
                    className="main-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3544.7816019941456!2d152.9819582754959!3d-27.320022876406792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b93fce3f0bd07f5%3A0xdbf7c55fa79e68de!2s24%20Terrence%20Rd%2C%20Brendale%20QLD%204500%2C%20Australia!5e0!3m2!1sen!2sin!4v1740552562758!5m2!1sen!2sin"
                    width="100%"
                    height="550"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsMap;
