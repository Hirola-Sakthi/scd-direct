import React from "react";

const ScdDifference = () => {
  return (
    <>
      <div className={`scd-different-parent`}>
        <div className="scd-different-subparent">
          <div className="container">
            <div className="scd-different-section-title">
              <h1>THE SCD Difference</h1>
            </div>
            <div className="differnce-points">
              <div className="row">
                <div className="col-md-3">
                  <div className="row">
                    <div className="icon">
                      <img src="/home/icons8-settings-100.png" alt="" />
                    </div>
                    <div className="title">
                      <h3>Technology</h3>
                    </div>
                    <hr />
                    <div className="description">
                      <p>
                        SCD Direct leverages advanced technology to ensure
                        precise left-to-right-hand drive conversions and ADR
                        compliance, setting new benchmarks in quality and
                        innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="row">
                    <div className="icon">
                      <img src="/home/icons8-experience-100.png" alt="" />
                    </div>
                    <div className="title">
                      <h3>Experience</h3>
                    </div>
                    <hr />
                    <div className="description">
                      <p>
                        With over 20 years of experience, SCD Direct’s founder
                        and team have mastered the art of vehicle import,
                        conversion, and compliance, delivering unparalleled
                        results in the Australian market.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="row">
                    <div className="icon">
                      <img src="/home/icons8-trust-100.png" alt="" />
                    </div>
                    <div className="title">
                      <h3>Trust</h3>
                    </div>
                    <hr />
                    <div className="description">
                      <p>
                        Recognized by renowned automotive giants like Ford and
                        Dodge RAM, we are a trusted partner for delivering
                        premium vehicles with exceptional service.
                      </p>
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

export default ScdDifference;
